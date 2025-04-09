const mensaje = document.getElementById('mensaje')
const elemento = document.getElementById('contenedor');

function nuevo_item(id) {
    const div = document.createElement("div");
    div.textContent = `item ${id} en el contenedor`;
    div.setAttribute("class", "item borde fuente");
    div.setAttribute("id", `item${id}`);
    return div
}

// let div = nuevo_item(4);
// elemento.appendChild(div);

// let item = document.querySelector("#item2");
// mensaje.textContent = elemento.removeChild(item)

// item = document.querySelector("#item1");
// div = nuevo_item(5);
// elemento.replaceChild(div, item)

// item = document.querySelector("#item3");
// div = nuevo_item(6);
// elemento.insertBefore(div, item);

// div = nuevo_item(7)
// elemento.insertBefore(div, null)

// div = nuevo_item(8);
// elemento.before(div);

// div = nuevo_item(9);
// elemento.after(div)

// div = nuevo_item(10);
// elemento.prepend(div);

// div = nuevo_item(11);
// elemento.append(div);

// let div = nuevo_item(12);
// let div2 = nuevo_item(13);
// elemento.replaceChildren(div, div2)

// div = nuevo_item(14);
// elemento.replaceWith(div);

// elemento.remove();

// div = nuevo_item(15);
// elemento.insertAdjacentElement("afterbegin", div)

// elemento.insertAdjacentHTML(
//     "beforebegin",
//     `<div id ="item16" class="item borde fuente">Item 16 en el contenedor</div>`
// );

// elemento.insertAdjacentText(
//     "beforebegin",
//     `item 17 con el insertAdjacentText`
// )

// elemento.children
// console.log(elemento.children)

// elemento.parentElement
// console.log(elemento.parentElement)

// elemento.firstElementChild
// console.log(elemento.firstElementChild)

// elemento.lastElementChild
// console.log(elemento.lastElementChild)

// const item2 = document.getElementById("item2");
// console.log(item2.previousElementSibling)