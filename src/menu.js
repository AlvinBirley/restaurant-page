// menu.js
const menuButton = document.querySelector('.menu');

export { menuButton };

const header = document.createElement('header');
import menuImage from "./assets/menu.jpg";
const image = document.createElement("img");
image.src = menuImage;

export function menuLoad() {
    const content = document.querySelector('.content'); 
    console.log("Here is our menu");
    content.innerHTML = "";  
    document.body.style.backgroundColor = "tan";  
    header.textContent = "Choose a delicious meal from our menu";
    content.appendChild(header);
    content.appendChild(image);
}