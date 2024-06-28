function loadAbout() {
    const content = document.querySelector("#content");
    const image = document.createElement("img");
    image.src = "https://harodigital.com/wp-content/uploads/2024/06/post-borgona-protagoniza-una-animada-cata-y-cena-para-seguir-celebrando-los-30-anos-de-la-vieja-bodega-8.jpeg";
    image.height = 100;
    content.appendChild(image);

    const header = document.createElement("h1");
    header.textContent = "About Sabor Ibérico";
    content.appendChild(header);

    const paragraph = document.createElement("p");
    paragraph.textContent = `Sabor Ibérico was founded in 2023 with a mission to bring authentic Spanish cuisine to our community. Our chefs, with years of experience in traditional Spanish cooking, prepare each dish with love and care. We believe in using the finest ingredients to create a dining experience that is both memorable and delightful. Whether you're here for a quick tapa or a full meal, we strive to make every visit special. ¡Bienvenidos!`;
    content.appendChild(paragraph);
}

export { loadAbout };