
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON(){
    fetch('./ofertas.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(ofertas){
                html += `
                <div class="card m-4 p-4" style="width: 20rem;">
                    <h5 class="card-title mt-4">${ofertas.nombre}</h5>
                    <img class="p-2 prod-img" src="${ofertas.img}" alt="">               
                    <p class="card-text">${ofertas.descripcion}</p>
                    <p class="precioofertas card-text"> <b>$ ${ofertas.precio}</b></p>
                    <button id="agregar${ofertas.id}" class ="button m-3"> <i class="fas fa-shopping-cart"></i>Comprar</button>
                </div>`;
            })
            document.getElementById('resultado').innerHTML = html;
        })
}

document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

// function cargarJSON(){
//     fetch('./assets/js/integrantes.json')
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(data){
//             let html = '';
//             data.forEach(function(integrantes){
//                 html += `
//                 <li>${integrantes.nombre} ${integrantes.apellido} ${integrantes.puesto}</li>`;
//             })
//             document.getElementById('resultado').innerHTML = html;
//         })
// }