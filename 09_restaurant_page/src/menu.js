function addHorizontalLine() {
    const hr = document.createElement("hr");
    hr.style.marginTop = "2rem";
    hr.style.width = "70%";
    content.appendChild(hr);
}

function loadMenu() {
    const content = document.querySelector("#content");
    const image = document.createElement("img");
    image.src = "https://admin.expatica.com/es/wp-content/uploads/sites/2/2023/10/spanish-cuisine-1536x1024.jpg";
    image.height = "100";
    content.appendChild(image);

    const header = document.createElement("h1");
    header.textContent = "Our Menu";
    content.appendChild(header);

    // Tapas
    addHorizontalLine();

    const tapas = document.createElement("div");
    tapas.id = "tapas";
    tapas.style.marginTop = "2rem";

    const tapasHeader = document.createElement("h2");
    tapasHeader.textContent = "Tapas"
    tapas.appendChild(tapasHeader);

    const tapasMenu = [{
            name: "Patatas Bravas",
            description: "Crispy potatoes served with a spicy tomato sauce and aioli"
        },
        {
            name: "Gambas al Ajillo",
            description: "Sizzling garlic shrimp cooked in olive oil and chili"
        },
        {
            name: "Chorizo al Vino",
            description: "Spicy Spanish sausage simmered in red wine"
        }
    ];

    tapasMenu.forEach(element => {
        const menuItem = document.createElement("div");

        const menuItemName = document.createElement("h3");
        menuItemName.textContent = element.name;
        menuItem.append(menuItemName);
    
        const menuItemDescription = document.createElement("p");
        menuItemDescription.textContent = element.description;
        menuItem.append(menuItemDescription);

        tapas.appendChild(menuItem);
    });

    content.appendChild(tapas);

    // Main Dishes
    addHorizontalLine();

    const dishes = document.createElement("div");
    dishes.id = "dishes";
    dishes.style.marginTop = "3rem";

    const dishesHeader = document.createElement("h2");
    dishesHeader.textContent = "Main Dishes"
    dishes.appendChild(dishesHeader);

    const dishesMenu = [{
            name: "Paella Valenciana",
            description: "Traditional rice dish with chicken, rabbit, and vegetables"
        },
        {
            name: "Pollo al Ajillo",
            description: "Garlic chicken served with roasted potatoes"
        },
        {
            name: "Merluza a la Gallega",
            description: "Galician-style hake fish with potatoes and paprika"
        }
    ];

    dishesMenu.forEach(element => {
        const menuItem = document.createElement("div");

        const menuItemName = document.createElement("h3");
        menuItemName.textContent = element.name;
        menuItem.append(menuItemName);
    
        const menuItemDescription = document.createElement("p");
        menuItemDescription.textContent = element.description;
        menuItem.append(menuItemDescription);

        dishes.appendChild(menuItem);
    });

    content.appendChild(dishes);


    // Beverages
    addHorizontalLine();

    const beverages = document.createElement("div");
    beverages.id = "beverages";
    beverages.style.marginTop = "3rem";

    const beveragesHeader = document.createElement("h2");
    beveragesHeader.textContent = "Beverages"
    beverages.appendChild(beveragesHeader);

    const beveragesMenu = [{
            name: "Sangria",
            description: "Classic Spanish wine punch with fruit and brandy"
        },
        {
            name: "Agua de Valencia",
            description: "Refreshing cocktail made with cava, orange juice, vodka, and gin"
        },
        {
            name: "Tinto de Verano",
            description: "Light red wine mixed with lemon soda"
        }
    ];

    beveragesMenu.forEach(element => {
        const menuItem = document.createElement("div");

        const menuItemName = document.createElement("h3");
        menuItemName.textContent = element.name;
        menuItem.append(menuItemName);
    
        const menuItemDescription = document.createElement("p");
        menuItemDescription.textContent = element.description;
        menuItem.append(menuItemDescription);

        beverages.appendChild(menuItem);
    });

    content.appendChild(beverages);

}


export { loadMenu };