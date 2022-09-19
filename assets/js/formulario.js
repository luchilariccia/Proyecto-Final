const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Enviando...";

    const serviceID = "service_lqa6y0u";
    const templateID = "template_7dhetwf";

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            btn.value = "Enviar";
            Swal.fire({
                icon: 'success',
                title: '¡Listo!',
                text: 'Mensaje enviado correctamente.'
              })
        },
        () => {
            btn.value= "Enviar";
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Algo salió mal, ¡intenta de nuevo!'
              })
            
        }
    )
});