// index.js
import "./styles.css";  
import { test } from "./exporter.js";  
import { homeLoad } from "./exporter.js"; 

console.log(test);

document.addEventListener('DOMContentLoaded', homeLoad);

import { homeButton } from "./exporter.js"; 

import { menuLoad } from "./menu.js";  
import { menuButton } from "./menu.js";  
import { aboutButton } from "./about.js";  
import { aboutLoad } from "./about.js"; 


menuButton.addEventListener('click', menuLoad); 

aboutButton.addEventListener('click', aboutLoad); 

homeButton.addEventListener('click', homeLoad); 