function loadHome() {
    const content = document.querySelector("#content");
    const image = document.createElement("img");
    image.src = "https://admin.expatica.com/es/wp-content/uploads/sites/2/2023/10/spanish-cuisine-1536x1024.jpg";
    image.height = "100";
    content.appendChild(image);

    const header = document.createElement("h1");
    header.textContent = "Welcome to Sabor Ibérico";
    content.appendChild(header);

    const paragraph = document.createElement("p");
    paragraph.textContent = `    At Sabor Ibérico, we bring the vibrant flavors of Spain right to your table. From sizzling paellas to
    tantalizing tapas, our dishes are crafted with the freshest ingredients and a passion for culinary
    excellence. Join us for an unforgettable dining experience where every bite is a celebration of Spanish
    tradition and taste. ¡Buen provecho!`;
    content.appendChild(paragraph);
}


export {loadHome};