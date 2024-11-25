// exporter.js
import homeImage from "./assets/restaurant.jpg"; 

const homeButton = document.querySelector('.home');

export { homeButton };

export const test = "Testing: 1, 2, 3.";

export function homeLoad() {
    const content = document.querySelector('.content');
    content.innerHTML=""
    document.body.style.backgroundColor = "olive";  
    const header = document.createElement('header');
    header.textContent = "The best restaurant on the Mediterranean";
    
    const image = document.createElement("img");
    image.src = homeImage; 

    console.log("Export successful");
    content.appendChild(header);
    content.appendChild(image);
}

