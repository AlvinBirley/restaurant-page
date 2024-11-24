//importing styles
import "./styles.css";
//importing variable from exporter.js
import { test } from "./exporter.js";

console.log(test);

//importing function from exporter.js
import {homeLoad} from "./exporter.js";

document.addEventListener('DOMContentLoaded', homeLoad);