export function initialPageLoad() {
    const contentDiv = document.querySelector('#content')
    
    contentDiv.replaceChildren();
    
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Mark's Restaurant";
    heading.classList.add("Landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/assets/restaurant-page.jpg"
    topImage.alt = "Image of Restaurant";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "This is an upscale restaurant";
    contentDiv.appendChild(para1);

}