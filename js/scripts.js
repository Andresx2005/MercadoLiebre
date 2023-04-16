function ingresarData(){
    let productonuevo = {
        marca: prompt("Ingresar marca del producto que desea agregar"),
        nombre: prompt("Ingresar el nombre"),
        ram: prompt("Ingresar la memoria ram"),
        memoria: prompt("Ingresar el tamaño de la memoria"),
        tamanio: prompt("Ingresar su tamaño en pulgadas"),
        color: prompt("Ingresar el color")
    }
    productonuevo.ram = parseInt(productonuevo.ram)
    productonuevo.memoria = parseInt(productonuevo.memoria)
    productonuevo.tamanio = parseFloat(productonuevo.tamanio)
    
    carrito.push(productonuevo)
}

let usuario = 'miUsuario'
let clave = 'miClave'

function mostrarPag(){
    let usuarioIng = prompt("Ingresar el usuario")
    let claveIng = prompt("Ingresa tu clave")
    while(usuario != usuarioIng && clave != claveIng){
        usuarioIng = prompt("Ingresar el usuario")
        claveIng = prompt("Ingresa tu clave")
    }
}

let carrito = [
    {
        marca: 'Samsung',
        nombre: 'Celular Samsung Galaxy Z Flip',
        ram: 8,
        memoria: 256,
        tamanio: 6.7,
        color: 'Negro'
    },
    {
        marca: 'Apple',
        nombre: 'Macbook Air',
        ram: 8,
        memoria: 128,
        tamanio: 13,
        color: 'Gris'
    }
]

for(i=0; i<carrito.length; i++){
    console.log(carrito[i])
}

let li0 = document.getElementsByClassName("li")[0]
let li1 = document.getElementsByClassName("li")[1]
let li2 = document.getElementsByClassName("li")[2]
let li3 = document.getElementsByClassName("li")[3]

li0.textContent = "TV Samsung"
li1.textContent = "Smart TV 32 pulgadas"
li2.textContent = "65000"
li3.textContent = "30"

let main = document.querySelector("main")

let seccionCarrito = document.createElement("section")
main.appendChild(seccionCarrito)

let tituloCarrito = document.createElement("h1")
tituloCarrito.innerText = "Carrito"
seccionCarrito.appendChild(tituloCarrito)

let articleCarrito = document.createElement("article.row")
seccionCarrito.appendChild(articleCarrito)
articleCarrito.style.border = "none" 

let listaCarrito = document.createElement("div")
listaCarrito.classList.add("col")
articleCarrito.appendChild(listaCarrito)

let cafeteraFila = document.createElement("div.row")
let macbookFila = document.createElement("div.row")
let tvFila = document.createElement("div.row")
let samsungFila = document.createElement("div.row")

listaCarrito.appendChild(cafeteraFila)
listaCarrito.appendChild(macbookFila)
listaCarrito.appendChild(tvFila)
listaCarrito.appendChild(samsungFila)

let cafetera = document.createElement("p")
let macbook = document.createElement("p")
let tv = document.createElement("p")
let samsung = document.createElement("p")

cafeteraFila.appendChild(cafetera)
macbookFila.appendChild(macbook)
tvFila.appendChild(tv)
samsungFila.appendChild(samsung)

let cafeteraCantidad = 0
let macbookCantidad = 0
let tvCantidad = 0
let samsungCantidad = 0

if(cafeteraCantidad == 0){
    cafeteraFila.style.display = "none"
} else {
    cafeteraFila.style.display = "block"
}
if(macbookCantidad == 0){
    macbookFila.style.display = "none"
} else {
    macbookFila.style.display = "block"
}
if(tvCantidad == 0){
    tvFila.style.display = "none"
} else {
    tvFila.style.display = "block"
}
if(samsungCantidad == 0){
    samsungFila.style.display = "none"
} else {
    samsungFila.style.display = "block"
}

let cafeSum = document.createElement("button")
let cafeRes = document.createElement("button")
let macbookSum = document.createElement("button")
let macbookRes = document.createElement("button")
let tvSum = document.createElement("button")
let tvRes = document.createElement("button")
let samsungSum = document.createElement("button")
let samsungRes = document.createElement("button")

cafeSum.innerHTML = "+"
cafeRes.innerHTML = "-"
macbookRes.innerHTML = "-"
macbookSum.innerHTML = "+"
tvSum.innerHTML = "+"
tvRes.innerHTML = "-"
samsungRes.innerHTML = "-"
samsungSum.innerHTML = "+"

cafeteraFila.appendChild(cafeRes)
cafeteraFila.appendChild(cafeSum)
macbookFila.appendChild(macbookRes)
macbookFila.appendChild(macbookSum)
tvFila.appendChild(tvRes)
tvFila.appendChild(tvSum)
samsungFila.appendChild(samsungRes)
samsungFila.appendChild(samsungSum)

let aumentarCafetera = () => {
    cafeteraCantidad++
    if(cafeteraCantidad == 0){
        cafeteraFila.style.display = "none"
    } else {
        cafeteraFila.style.display = "block"
    }
    cafetera.innerHTML = cafeteraCantidad + "x Cafetera Moulinex"
}

let restarCafetera = () => {
    cafeteraCantidad--
    if(cafeteraCantidad == 0){
        cafeteraFila.style.display = "none"
    } else {
        cafeteraFila.style.display = "block"
    }
    cafetera.innerHTML = cafeteraCantidad + "x Cafetera Moulinex"
}

let aumentarMacbook = () => {
    macbookCantidad++
    if(macbookCantidad == 0){
        macbookFila.style.display = "none"
    } else {
        macbookFila.style.display = "block"
    }
    macbook.innerHTML = macbookCantidad + "x Macbook Pro 2019"
}

let restarMacbook = () => {
    macbookCantidad--

        if(macbookCantidad == 0){
        macbookFila.style.display = "none"
    } else {
        macbookFila.style.display = "block"
    }
    macbook.innerHTML = macbookCantidad + "x Macbook Pro 2019"
}

let aumentarTv = () => {
    tvCantidad++
    if(tvCantidad == 0){
        tvFila.style.display = "none"
    } else {
        tvFila.style.display = "block"
    }
    tv.innerHTML = tvCantidad + "x TV LG 40 pulgadas"
}

let restarTv = () => {
    tvCantidad--
    if(tvCantidad == 0){
        tvFila.style.display = "none"
    } else {
        tvFila.style.display = "block"
    }
    tv.innerHTML = tvCantidad + "x TV LG 40 pulgadas"
}

let aumentarSamsung = () => {
    samsungCantidad++
    if(samsungCantidad == 0){
        samsungFila.style.display = "none"
    } else {
        samsungFila.style.display = "block"
    }
    samsung.innerHTML = samsungCantidad + "x Samsung Galaxy"
}

let restarSamsung = () => {
    samsungCantidad--
    if(samsungCantidad == 0){
        samsungFila.style.display = "none"
    } else {
        samsungFila.style.display = "block"
    }
    samsung.innerHTML = samsungCantidad + "x Samsung Galaxy"
}

let comprarCafetera = document.querySelector("#boton-cafetera")
let comprarMacbook = document.querySelector("#boton-macbook")
let comprarTv = document.querySelector("#boton-tv")
let comprarSamsung = document.querySelector("#boton-samsung")

comprarCafetera.addEventListener("click", aumentarCafetera)
cafeSum.addEventListener("click", aumentarCafetera)
cafeRes.addEventListener("click", restarCafetera)
comprarMacbook.addEventListener("click", aumentarMacbook)
macbookSum.addEventListener("click", aumentarMacbook)
macbookRes.addEventListener("click", restarMacbook)
comprarTv.addEventListener("click", aumentarTv)
tvSum.addEventListener("click", aumentarTv)
tvRes.addEventListener("click", restarTv)
comprarSamsung.addEventListener("click", aumentarSamsung)
samsungSum.addEventListener("click", aumentarSamsung)
samsungRes.addEventListener("click", restarSamsung)

let br = document.createElement("br")
let creadores = document.createElement("button")
main.appendChild(br)
main.appendChild(creadores)
creadores.innerHTML = "Creadores"

let creadoresF = () => {
    alert("El creador de la pagina es: Andres Burcheri, tiene 16 años y cursa DW2")
}

creadores.addEventListener("click", creadoresF)