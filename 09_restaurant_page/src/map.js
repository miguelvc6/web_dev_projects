function loadMap() {
    const content = document.querySelector("#content");
    
    const header = document.createElement("h1");
    header.textContent = "Find Us";
    content.appendChild(header);
    
    const paragraph = document.createElement("p");
    paragraph.textContent = `Sabor Ibérico is located in the heart of the city, making it easy for you to drop by for a delicious meal. 
    Use the map below to find our exact location and plan your visit. We look forward to welcoming you!`;
    content.appendChild(paragraph);
    
    const mapFrame = document.createElement("iframe");
    mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.915992649055!2d-122.08424968469271!3d37.42199997982554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5ff80b839f1%3A0x2d2d77de7521c4b8!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633962010343!5m2!1sen!2sus";
    mapFrame.width = "600";
    mapFrame.height = "450";
    mapFrame.style.border = "0";
    mapFrame.allowFullscreen = "";
    mapFrame.loading = "lazy";
    content.appendChild(mapFrame);
}

export {loadMap};