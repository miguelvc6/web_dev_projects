const key = "4b006dac17a642f8901154439240107"; // This API key is safe in github

document.addEventListener("DOMContentLoaded", function () {
    // Constants for the form elements
    const mainForm = document.querySelector("#form");
    const currentForm = document.querySelector("#form-current");
    const forecastForm = document.querySelector("#form-forecast");
    const submitButton = document.querySelector("#form-submit");

    // Function to toggle form display based on selected radio button
    function toggleFormDisplay(display) {
        if (display === "current") {
            currentForm.style.display = "block";
            forecastForm.style.display = "none";
        } else if (display === "forecast") {
            currentForm.style.display = "none";
            forecastForm.style.display = "block";
        }
    }

    toggleFormDisplay(document.querySelector('input[name="type"]:checked').value);

    // Add event listeners to radio buttons
    const radioButtons = document.querySelectorAll('input[name="type"]');
    radioButtons.forEach(function (radio) {
        radio.addEventListener("change", function () {
            toggleFormDisplay(radio.value);
        });
    });

    // Retrieve form data and handle submission
    mainForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting
        const formDataObj = {};

        Array.from(mainForm.elements).forEach((element) => {
            if (element.type === "checkbox") {
                formDataObj[element.name] = element.checked ? "yes" : "no";
            } else if (element.type !== "radio" || element.checked) {
                formDataObj[element.name] = element.value;
            }
        });

        const url = retrieveFormData(formDataObj);

        send_request(url).then((response) => {
            displayResponse(response);
            setWeatherBackground(response);
        });
    });
});

function retrieveFormData(formDataObj) {
    let url;
    if (formDataObj.type === "current") {
        url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${formDataObj.location}&aqi=${formDataObj.aqi}`;
    } else if (formDataObj.type === "forecast") {
        url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${formDataObj.location}&days=${formDataObj.days}&aqi=${formDataObj.forecastaqi}&alerts=${formDataObj.alert}`;
    }
    return url;
}

async function send_request(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function displayResponse(data) {
    const responseElement = document.querySelector("#response");
    responseElement.innerHTML = '';

    if (data.current) {
        responseElement.innerHTML += `<strong>Current Weather:</strong><br>
                                      Temperature: ${data.current.temp_c}°C<br>
                                      Condition: ${data.current.condition.text}<br>
                                      Humidity: ${data.current.humidity}%<br>`;
    }
    
    if (data.forecast) {
        responseElement.innerHTML += `<strong>Forecast:</strong><br>`;
        data.forecast.forecastday.forEach(day => {
            responseElement.innerHTML += `Date: ${day.date}<br>
                                          Max Temp: ${day.day.maxtemp_c}°C<br>
                                          Min Temp: ${day.day.mintemp_c}°C<br>
                                          Condition: ${day.day.condition.text}<br>
                                          <br>`;
        });
    }

    if (data.alerts && data.alerts.alert) {
        responseElement.innerHTML += `<strong>Weather Alerts:</strong><br>`;
        data.alerts.alert.forEach(alert => {
            responseElement.innerHTML += `Alert: ${alert.headline}<br>
                                          Severity: ${alert.severity}<br>
                                          Description: ${alert.desc}<br>
                                          <br>`;
        });
    }
}

function setWeatherBackground(data) {
    let condition = '';
    if (data.current) {
        condition = data.current.condition.text;
    } else if (data.forecast) {
        condition = data.forecast.forecastday[0].day.condition.text;
    }

    const body = document.body;

    switch (condition.toLowerCase()) {
        case 'sunny':
        case 'clear':
            body.style.background = 'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)';
            break;
        case 'partly cloudy':
            body.style.background = 'linear-gradient(to top, #a3bded 0%, #6991c7 100%)';
            break;
        case 'cloudy':
        case 'overcast':
            body.style.background = 'linear-gradient(to top, #bdc3c7 0%, #2c3e50 100%)';
            break;
        case 'mist':
        case 'fog':
            body.style.background = 'linear-gradient(to top, #e0eafc 0%, #cfdef3 100%)';
            break;
        case 'rain':
        case 'showers':
        case 'drizzle':
            body.style.background = 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)';
            break;
        case 'thunderstorm':
            body.style.background = 'linear-gradient(to top, #373b44 0%, #4286f4 100%)';
            break;
        case 'snow':
        case 'blizzard':
            body.style.background = 'linear-gradient(to top, #e6dada 0%, #274046 100%)';
            break;
        default:
            body.style.background = 'linear-gradient(to top, #e0eafc 0%, #cfdef3 100%)';
            break;
    }
}
