const validacionCookies = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success m-1',
      cancelButton: 'btn btn-danger m-1'
    },
    buttonsStyling: false
  })
  
  validacionCookies.fire({
    title: 'Recopilación de Cookies',
    text: "¿Aceptas la recopilación de cookies durante tu navegación en el sitio?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, acepto!',
    cancelButtonText: 'No, lo rechazo!',
    reverseButtons: true
    }).then((result) => {
if (result.isConfirmed) {
    validacionCookies.fire(
    '¡Entendido!',
    '¡Gracias por aceptar la recoopilación de cookies!',
    'success'
    )
} else if (
      result.dismiss === Swal.DismissReason.cancel
) {
    validacionCookies.fire(
    '¡Entendido!',
    'Podrás navegar por el sitio, ¡pero no realizar compras en el mismo!',
    'error'
)
}
})