$(document).ready(function() {

    $('#btnSend').click(function() {

        var errores = '';
        //var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

        // Validado Nombre ==============================
        if ($('#nombre').val() == '' || $('#nombre').val() >= 30) {
            errores += '<p>Nombre inválido, verificar campo.</p>';
            $('#nombre').css("border-bottom-color", "#F14B4B")
        } else {
            $('#nombre').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Apellido ==============================
        if ($('#apellido').val() == '' || $('#apellido').val() >= 30) {
            errores += '<p>Apellido inválido, verificar campo.</p>';
            $('#apellido').css("border-bottom-color", "#F14B4B")
        } else {
            $('#apellido').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================

        // var esValido = expReg.test($('#email'));
        if ($('#email').val() == '') {
            errores += '<p>Correo electrónico invalido, verificar campo.</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1")
        }


        // ENVIANDO MENSAJE ============================
        if (errores == '' == false) {
            var mensajeModal = '<div class="modal_wrap">' +
                '<div class="mensaje_modal">' +
                '<h3>Errores encontrados</h3>' +
                errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function() {
            $('.modal_wrap').remove();
        });
    });

});