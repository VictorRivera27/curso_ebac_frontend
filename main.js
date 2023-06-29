const form = document.getElementById('formulario-exer');

function validaFormulario(valorA, valorB) {
    if (valorB > valorA) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e){
    let formEvalido = false;
    e.preventDefault();

    const numeroCampoA = Number(document.getElementById('campoA').value);
    const numeroCampoB = Number(document.getElementById('campoB').value);
    const mensagemSucesso = 'Formulário válido!';
    const mensagemError = 'O Número B deve ser maior que o Número A.';

    const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
    const containerMensagemError = document.querySelector('.mensagem-error');

    formEvalido = validaFormulario(numeroCampoA, numeroCampoB);
    if (formEvalido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'; //faz a mensagem de sucesso aparecer

        containerMensagemError.style.display = 'none'; //faz a mensagem de erro sumir
    }else {
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block'; //faz a mensagem de erro aparecer

        containerMensagemSucesso.style.display = 'none'; //faz a mensagem de sucesso sumir
        document.getElementById('campoB').value = '';
    }
})