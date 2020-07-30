/* Como cargamos el script al final del documento HTML, no es necesario
    esperar a la carga del mismo */

/* Además, deberíamos esperar al envío del formulario, que podría
    producirse al pulsar ENTER en cualquier campo de texto y no solo
    pulsando del botón de envío. Además, uso el parámetro "e" para poder
    cancelar el envío del formulario en caso de error */
document.getElementById("formulario").addEventListener('submit', (e) => {
    var errores = '';
    //var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    // Validado Nombre ==============================
    /* Para validar la longitud del nombre habría que usar la propiedad
        de String ".length". Además, quitamos espacios en blanco */
    let nombre = $('#nombre').val().trim();
    if (nombre == '' || nombre.length >= 30) {
        errores += "<p>Nombre inválido, verificar campo.</p>\n";
        $('#nombre').css("border-bottom-color", "#F14B4B")
    } else {
        $('#nombre').css("border-bottom-color", "#d1d1d1")
    }

    // Validado Apellido ==============================
    let apellido = $('#apellido').val().trim();
    if (apellido == '' || apellido.length >= 30) {
        errores += "<p>Apellido inválido, verificar campo.</p>\n";
        $('#apellido').css("border-bottom-color", "#F14B4B")
    } else {
        $('#apellido').css("border-bottom-color", "#d1d1d1")
    }

    // Validado Correo ==============================

    // var esValido = expReg.test($('#email'));
    let email = $('#email').val().trim();
    if (email == '') {
        errores += "<p>Correo electrónico invalido, verificar campo.</p>\n";
        $('#email').css("border-bottom-color", "#F14B4B")
    } else {
        $('#email').css("border-bottom-color", "#d1d1d1")
    }

    // ENVIANDO MENSAJE ============================
    /* El "== false" sobra en la comprobación */
    if (errores.length > 0) {
        /* Cancelo el envío del formulario */
        e.preventDefault();
        /* Usamos plantillas para ver mejor el código HTML */
        let mensajeModal = `
            <div class="modal_wrap">
                <div class="mensaje_modal">
                    <h3>Errores encontrados</h3>
                    ${errores}
                    <span id="btnClose">Cerrar</span>
                </div>
            </div>
        `;

        $('body').append(mensajeModal);
    }

    // CERRANDO MODAL ==============================
    $('#btnClose').click(function() {
        $('.modal_wrap').remove();
    });
});
