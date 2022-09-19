let eventos = [
    {
        dia: "17",
        mes: "AGOSTO",
        nombre: "Evento a beneficio",
        descripcion: "A partir de las 16:00hs se realizará un evento de autos clásicos en el Museo Oceanográfico de Montevideo",
        lugar: "https://www.google.com/maps/dir//Museo+Zool%C3%B3gico+D%C3%A1maso+Antonio+Larra%C3%B1aga,+Rbla.+Rep%C3%BAblica+de+Chile+4215,+11300+Montevideo,+Departamento+de+Montevideo/@-34.9032916,-56.1257425,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x959f8137c4ce85ab:0x78a98259ab3400c3!2m2!1d-56.1236451!2d-34.9031787!3e0" 
    },
    {
        dia: "21",
        mes: "SEPTIEMBRE",
        nombre: "Evento a beneficio - Peñarol",
        descripcion: "A partir de las 12:00hs se realizará una caravana solidaria, desde el Estadio Centenario, teniendo como destino el Campeón del Siglo.",
        lugar: "https://www.google.com/maps/dir//Estadio+Centenario,+11400+Montevideo,+Departamento+de+Montevideo/@-34.8943043,-56.1543402,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x959f81021a293c9f:0x47c23b3c464091c1!2m2!1d-56.1528289!2d-34.8945376!3e0"  
    },
    {
        dia: "13",
        mes: "OCTUBRE",
        nombre: "Evento de DriveFast",
        descripcion: "Jornada automovilística en el Autodromo del Pinar a partir de las 10:00hs, con distintas categorías de vehículos y serie de drift.",
        lugar: "https://www.google.com/maps/place/Aut%C3%B3dromo+Victor+Borrat+Fabini/@-34.785046,-55.9236717,17z/data=!3m1!4b1!4m5!3m4!1s0x959f8a082e820cfb:0xb03bd017d3eb1677!8m2!3d-34.785046!4d-55.921483" 
    },
    {
        dia: "12",
        mes: "DICIEMBRE",
        nombre: "Evento de Fin de Año",
        descripcion: "Para cerrar el año a lo grande, a partir de las 10:00hs se realizará una jornada de exposición en el Autódromo del Pinar.",
        lugar: "https://www.google.com/maps/place/Aut%C3%B3dromo+Victor+Borrat+Fabini/@-34.785046,-55.9236717,17z/data=!3m1!4b1!4m5!3m4!1s0x959f8a082e820cfb:0xb03bd017d3eb1677!8m2!3d-34.785046!4d-55.921483"  
    }
];

const contenedorEventos = document.getElementById('contenedor-eventos-desktop');

eventos.forEach((evento) => {
    const div = document.createElement('div');
    div.classList.add('contenedor-tarjeta-desktop','d-flex', 'justify-content-center', 'align-items-center', 'col-xl-12', 'col-10', 'p-2', 'mt-4', 'mb-4');
    div.innerHTML = `<div class="fecha col-2 text-center">
    <h1 class="dia-fecha">${evento.dia}</h1>
    <p class="mes-fecha">${evento.mes}</p>
</div>
<div class="linea col-2"></div>
<div class="col-6">
    <h2 class="pb-2">${evento.nombre}</h4>
    <p class="card-text">${evento.descripcion}</p>
</div>
<div class="d-flex col-2 justify-content-end ">
    <a class="boton-eventos p-1" href="${evento.lugar}"> Ir a <B>Maps</B></a>
</div>
`

contenedorEventos.appendChild(div);
})

const contenedorEventosMobile = document.getElementById('contenedor-eventos-mobile');

eventos.forEach((evento) => {
    const div = document.createElement('div');
    div.classList.add('contenedor-tarjeta-mobile', 'flex-wrap', 'col-10', 'justify-content-center', 'mb-4');
    div.innerHTML = `<div class="fecha-mobile text-center">
    <h1 class="dia-mobile">${evento.dia}</h1>
    <p class="mes-mobile">${evento.mes}</p>
</div>
<div class="linea mb-4"></div>
<div class="text-center">
    <h2 class="mb-5">${evento.nombre}</h2>
    <p class="card-text">${evento.descripcion}</p>
</div>
<div class="m-5 contenedor-boton d-flex justify-content-center">
    <a class="boton-eventos-mobile" href="${evento.lugar}">Ir a <b>Maps</b></a>
</div>
`
contenedorEventosMobile.appendChild(div);
})