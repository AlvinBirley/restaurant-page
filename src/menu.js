export function menu () {
    const contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "uybouyvuyub";
    heading.classList.add('landing-title');
    contentDiv.appendChild(heading);
}