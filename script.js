
// Script de validação de dados do formulario.

var nome = document.getElementById('nome'); 
var email = document.getElementById('melhor-email');
var confirmacao = document.getElementById('email');
var telefone = document.getElementById('telefone');
var mensagem = document.getElementById('mensagem');
var botao = document.getElementById('btn-enviar');

function enviar_dados(){
    if(nome.value.length < 3){
        alert('O nome precisa possuir pelo menos 3 caracteres');
        return false;
    }

    if(email.value != confirmacao.value){
        alert('Os email estão diferentes');
        return false;
    }

    if(telefone.value.length != 11){
        alert('O telefone deve possuir 11 caracteres');
        return false;  
    }

    if(mensagem.value.length < 15){ 
        alert('O campo mensagem precisa possuir 15 ou mais caracteres');
        return false;
    }

    alert('Olá ' + nome.value + '!! \nObrigado pelo interesse, em breve entrarei em contato.' );
    return true;
}

botao.onclick = enviar_dados;


// Script do batao volta para o topo.

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById('volta-topo-btn');

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    };

    button.addEventListener('click', function () {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
});

// Script dos botoes de inicio que ao clicar ele rola ate a seção desejada.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
