$(document).ready(function () {
    // Validacao Bootstrap
    $('.needs-validation').on('submit', function (event) {
        if (!this.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            $('#formulario-enviado').removeClass('d-none').addClass('d-block');
        }

        $(this).addClass('was-validated');
    });

    //  Mascaras do formulario
    $('#telefone').mask('00 00000-0000', {
        placeholder: 'Digite seu telefone com DDD aqui!'
    });
})