const mensaje = document.getElementById('mensaje');

const elemento = document.getElementById('item1');

mensaje.innerText = `Cantidad de clases en el elemento: ${elemento.classList.length}`

// mensaje.innerText = `Clase en la posicion 2 del elemento: ${elemento.classList.item(2)}`;

// mensaje.innerText = `Exiate la clase conatiner en el item1? : ${elemento.classList.contains("container") ? "SI" : "NO"}`;

const txtClase = document.getElementById("clase");
const txtClaseNueva = document.getElementById("claseNueva");
const btnAdd = document.getElementById("btnAdd");
const btnRemove = document.getElementById("btnRemove");
const btnToggle = document.getElementById("brnToggle");
const btnReplace = document.getElementById("btnReplace");

btnAdd.addEventListener("click", () =>{
    elemento.classList.add(txtClase.value);
});

btnRemove.addEventListener("click", () =>{
    elemento.classList.remove(txtClase.value)
});

btnToggle.addEventListener("click", ()=> {
    elemento.classList.toggle(txtClase.value, true);
    mensaje.innerHTML = `Clases en el Item 1: ${elemento.getAttribute("class")}`;
})

btnReplace.addEventListener("click", ()=> {
    elemento.classList.replace(txtClase.value, txtClaseNueva.value)
    mensaje.innerHTML = `Clases en el Item 1:${elemento.getAttribute("clases")}`
})