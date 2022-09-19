let carrito = [];

let stockProductos = [
    {
        id: 1, 
        nombre : "Paquete A",
        descripcion: "Consiste en una sesión en la ubicación que usted desee, con las características que guste, pero con un máximo de 15 fotos a elección del repertorio completo.",
        precio : 800,
        img : "/assets/img/logos/logo-nuevo-tarjetas-15.png",
        destacado : 0

    },
    {
        id: 2,
        nombre : "Paquete B",
        descripcion: "Consiste en una sesión en la ubicación que usted desee, con las características que guste, pero con un máximo de 30 fotos a elección del repertorio completo.",
        precio : 1300,
        img : "/assets/img/logos/logo-nuevo-tarjetas-30.png",
        destacado : 1

    },
    {
        id: 3,
        nombre : "Paquete C",
        descripcion: "Consiste en una sesión en la ubicación que usted desee, con las características que guste, pero con un máximo de 15 fotos a elección del repertorio completo.",
        precio : 2000,
        img : "/assets/img/logos/logo-nuevo-tarjetas-45.png",
        destacado : 1

    },
    {
        id: 4,
        nombre : "Paquete D",
        descripcion: "Consiste en una sesión en la ubicación que usted desee, con las características que guste, donde el comprador define la cantidad de fotos a escoger, partiendo de 60.",
        precio : 3500,
        img : "/assets/img/logos/logo-nuevo-tarjetas-p.png",
        destacado : 0

    }
];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    } else {
        carrito.length = 0;
        actualizarCarrito();
    }
})


const botonVaciar = document.getElementById('vaciar-carrito')

botonVaciar.addEventListener('click', () => {
    carrito.length === 0 && swal({
        tittle: '¡Error!',
        text: '¡Tu carrito ya se encuentra vacio!',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
            confirmButtonText: 'btn-ok-modal' 
          }
    });
    carrito.length = 0;
    Toastify({

        text: "¡Tu carrito se vació correctamente!",
        
        duration: 3000,

        style:{
            background: "linear-gradient(to right, #000000, #000000)",
        },
        
        
        }).showToast();
    actualizarCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
})



const precioTotal = document.getElementById('precioTotal');

const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarrito = document.getElementById('carrito-contenedor');

stockProductos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('tarjeta-prod');
    div.innerHTML = ` 
    <div class="card m-4 p-4" style="width: 20rem;">
        <h5 class="card-title mt-4">${producto.nombre}</h5>
        <img class="p-2 prod-img" src="${producto.img}" alt="">               
        <p class="card-text">${producto.descripcion}</p>
        <p class="precioProducto card-text"> <b>$ ${producto.precio}</b></p>
        <button id="agregar${producto.id}" class ="button m-3"> <i class="fas fa-shopping-cart"></i>Comprar</button>
    </div>
    ` 
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
        Toastify({

            text: "¡Producto agregado correctamente!",
            
            duration: 3000,

            style:{
                background: "linear-gradient(to right, #000000, #000000)",
            },
            
            
            }).showToast();
    });

});

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId);
    carrito.push(item);
    actualizarCarrito();
    console.log(carrito);
}

const eliminarDeLCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);

    const indice = carrito.indexOf(item);
    
    carrito.splice(indice, 1);

    Toastify({

        text: "¡Producto eliminado correctamente!",
        
        duration: 3000,

        style:{
            background: "linear-gradient(to right, #000000, #000000)",
        },
        
        
        }).showToast();

    actualizarCarrito();

    localStorage.setItem('carrito', JSON.stringify(carrito))


}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML="";
    
    carrito.forEach ((prod) => {
        const div = document.createElement ('div')
        div.className = ('productoEnCarrito');
        div.innerHTML = ` <div class = "d-flex align-items-center justify-content-between mx-5">
        <p class = "m-2 text-center col-2">${prod.nombre}</p>
        <img class="p-2 prod-img-carrito" src="${prod.img}" alt="">
        <p class = "m-1 col-4">Precio: <b> $${prod.precio}</b> </p>
        <button onclick = "eliminarDeLCarrito (${prod.id})" class = "boton-eliminar col-3 p-1 m-1 justify-content-end"><i class = "fas fa-trash-alt"></i>Eliminar</button>
        </div>
        `

        contenedorCarrito.appendChild(div);

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}

function cargarJSON(){
    fetch('./assets/js/integrantes.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach((producto) => {
                const div = document.createElement('div');
                div.classList.add('tarjeta-prod');
                div.innerHTML = ` 
                <div class="card m-4 p-4" style="width: 20rem;">
                    <h5 class="card-title mt-4">${producto.nombre}</h5>
                    <img class="p-2 prod-img" src="${producto.img}" alt="">               
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="precioProducto card-text"> <b>$ ${producto.precio}</b></p>
                    <button id="agregar${producto.id}" class ="button m-3"> <i class="fas fa-shopping-cart"></i>Comprar</button>
                </div>
                ` 
                contenedorProductos.appendChild(div);
            
                const boton = document.getElementById(`agregar${producto.id}`)
            
            
            
            
        })
    }
,)}
