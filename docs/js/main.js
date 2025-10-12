console.log("test");
async function addPart(id, file) {
    const elmnt = document.getElementById(id);
    const resp = await fetch(file).then((res) => {
        res
    });
    elmnt.innerHTML = await resp.text();
}

document.addEventListener("DOMContentLoaded", () => {

    addPart('header', './header.html');
});