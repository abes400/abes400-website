async function addPart(id, file) {
    const elmnt = document.getElementById(id);
    const resp = await fetch(file);
    elmnt.innerHTML = resp.text();
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("test");
    addPart('header', './header.html');
});