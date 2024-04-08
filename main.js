$(document).ready(function() {
//  Aplicacao das mascaras nos campos
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Telefone (com DDD)'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Digite seu CPF'
    })
    $('#data').mask('00/00/0000', {
        placeholder: 'Digite sua data de nascimento'
    })
    $('#cep').mask('00000-000', {
        placeholder: 'Digite seu CEP'
    })
//  Aplicacao da validacao dos campos
    $('form').validate({
        errorClass: 'error',
        errorElement: 'div',
        rules: {
            nome: {
                required: true
            },
            sobrenome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            data: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: {
                required: 'Por favor, insira seu nome'
            },
            sobrenome: {
                required: 'Por favor, insira seu sobrenome'
            },
            email: {
                required: 'Por favor, insira seu e-mail',
                email: 'Por favor, digite um e-mail valido'
            },
            telefone: {
                required: 'Por favor, insira seu telefone'
            },
            cpf: {
                required: 'Por favor, insira seu CPF'
            },
            data: {
                required: 'Por favor, insira sua data de nascimento'
            },
            endereco: {
                required: 'Por favor, insira seu endereço completo'
            },
            cep: {
                required: 'Por favor, insira seu CEP'
            }
        },
        submitHandler: function(form) {
            alert('Dados cadastrados!')
        }
    })
//  Efeito de sombra no botao
    $('#botao').hover(
        function() {
            $(this).addClass('button-hover');
        },
        function() {
            $(this).removeClass('button-hover');
        }
    );
})