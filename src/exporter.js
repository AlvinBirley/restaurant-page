// exporting variable to index.js
export const test = "Testing: 1, 2, 3.";

const content = document.querySelector('.content');
const header = document.createElement('header');
header.textContent = "The best restaurant on the Mediterranean";

import homeImage from "./assets/restaurant.jpg";
const image = document.createElement("img");
image.src = homeImage;

export function homeLoad() {
    console.log("Export successful");
    content.appendChild(header);
    content.appendChild(image);
  }

