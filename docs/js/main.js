console.log("test");
async function addPart(id, file) {
    const elmnt = document.getElementById(id);
    await fetch(file).then((res) => {
        elmnt.innerHTML = res.text();
    });
    
}

document.addEventListener("DOMContentLoaded", () => {

    addPart('header', './header.html');
});