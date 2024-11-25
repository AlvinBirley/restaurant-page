const aboutButton = document.querySelector('.about');

export { aboutButton };

const header = document.createElement('header');
import aboutImage from "./assets/family.jpg";
const image = document.createElement("img");
image.src = aboutImage;


export function aboutLoad() {
    const content = document.querySelector('.content'); 
    console.log("Here is our family");
    content.innerHTML = "";  
    document.body.style.backgroundColor = "maroon";  
    header.textContent = "Family owned since 1553";
    content.appendChild(header);
    content.appendChild(image);
}