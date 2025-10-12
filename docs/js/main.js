async function addPart(id, file) {
    const elmnt = document.getElementById(id);
    const resp = await fetch(file);
    elmnt.innerHTML = resp.text();
}

document.addEventListener("DOMContentLoaded", () => {
    addPart('header', './header.html');
});