function loadReservation() {
    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    header.textContent = "Make a Reservation";
    content.appendChild(header);

    const paragraph = document.createElement("p");
    paragraph.textContent = `Reserve your table at Sabor Ibérico and enjoy an unforgettable dining experience. 
    Please fill out the form below to book your table. We look forward to serving you!`;
    content.appendChild(paragraph);

    const form = document.createElement("form");

    const nameLabel = document.createElement("label");
    nameLabel.for = "name";
    nameLabel.textContent = "Name:";
    form.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.required = true;
    form.appendChild(nameInput);

    form.appendChild(document.createElement("br"));

    const emailLabel = document.createElement("label");
    emailLabel.for = "email";
    emailLabel.textContent = "Email:";
    form.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;
    form.appendChild(emailInput);

    form.appendChild(document.createElement("br"));

    const phoneLabel = document.createElement("label");
    phoneLabel.for = "phone";
    phoneLabel.textContent = "Phone:";
    form.appendChild(phoneLabel);

    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.id = "phone";
    phoneInput.name = "phone";
    phoneInput.required = true;
    form.appendChild(phoneInput);

    form.appendChild(document.createElement("br"));

    const dateLabel = document.createElement("label");
    dateLabel.for = "date";
    dateLabel.textContent = "Date:";
    form.appendChild(dateLabel);

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "date";
    dateInput.required = true;
    form.appendChild(dateInput);

    form.appendChild(document.createElement("br"));

    const timeLabel = document.createElement("label");
    timeLabel.for = "time";
    timeLabel.textContent = "Time:";
    form.appendChild(timeLabel);

    const timeInput = document.createElement("input");
    timeInput.type = "time";
    timeInput.id = "time";
    timeInput.name = "time";
    timeInput.required = true;
    form.appendChild(timeInput);

    form.appendChild(document.createElement("br"));

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Reserve Now";
    form.appendChild(submitButton);

    content.appendChild(form);
}


export {loadReservation};