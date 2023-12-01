function alterarCor() {
    let cabecalho = document.querySelectorAll('.menu-link');
    let corTexto = document.querySelectorAll('.card-texto');
    let nomeAluno = document.querySelectorAll('.nome-aluno');
    let tituloDesc = document.querySelectorAll('.titulo-descricao');
    let corLinks = document.querySelectorAll('.card-link');
    let rodape = document.querySelectorAll('.rodape');
    let botao = document.querySelector('#botao');
    let botaoAumenta = document.querySelector('.botao-fonte');
    let botaoDiminui = document.querySelector('.botao-fonte-menos');

    //dark mode
    let corBodyD = '#1d1d1d'
    let corCabecalhoD = '#ffffff'
    let corNomesD = '#28a745'
    let corTextosD = '#ffc107'
    let corExtraD = '#9b59b6'

    //white mode
    let corBodyW = '#ffffff'
    let corCabecalhoW = '#333333'
    let corNomesW = '#1abc9c'
    let corTextosW = '#ff802c'
    let corExtraW = '#9b59b6'

    if (botao.value === 'DARK MODE') {
        botao.value = 'WHITE MODE';
        botaoAumenta.style.color = corBodyD
        botaoAumenta.style.backgroundColor = corNomesD
        botaoDiminui.style.color = corBodyD
        botaoDiminui.style.backgroundColor = corNomesD
        botao.style.color = corBodyD;
        botao.style.backgroundColor = corNomesD;
        document.body.style.backgroundColor = corBodyD

        cabecalho.forEach(function(cabecalho){
            cabecalho.style.color = corCabecalhoD;
        })
        
        corTexto.forEach(function(corTexto){
            corTexto.style.color = corTextosD;
            // console.log('funciona')
        });

        nomeAluno.forEach(function(nomeAluno){
            nomeAluno.style.color = corNomesD;
        })

        tituloDesc.forEach(function(tituloDesc) {
            tituloDesc.style.color = corExtraD; 
        });

        corLinks.forEach(function(corLinks){
            corLinks.style.color = corTextosD;
        })

        rodape.forEach(function(rodape){
            rodape.style.backgroundColor = corExtraD
            rodape.style.color = corBodyD
        })

      } else {
        botao.value = 'DARK MODE';
        botaoAumenta.style.color = corBodyW;
        botaoAumenta.style.backgroundColor = corNomesW;
        botaoDiminui.style.color = corBodyW;
        botaoDiminui.style.backgroundColor = corNomesW;
        botao.style.color = corBodyW;
        botao.style.backgroundColor = corNomesW;
        document.body.style.backgroundColor = corBodyW

        cabecalho.forEach(function(cabecalho){
            cabecalho.style.color = corCabecalhoW;
        })

        corTexto.forEach(function(corTexto){
            corTexto.style.color = corTextosW;
        });

        nomeAluno.forEach(function(nomeAluno){
            nomeAluno.style.color = corNomesW;
        })

        tituloDesc.forEach(function(tituloDesc) {
            tituloDesc.style.color = corExtraW; 
          });

        corLinks.forEach(function(corLinks){
            corLinks.style.color = corTextosW;
        })

        rodape.forEach(function(rodape){
            rodape.style.backgroundColor = corExtraW
            rodape.style.color = corBodyW
        })
    }
}

function aumentaFonte() {
    let paragrafo = document.querySelectorAll('.card-texto');
    
    paragrafo.forEach(function(paragrafo){
        let estiloAtual = window.getComputedStyle(paragrafo, null).getPropertyValue('font-size');

        if (estiloAtual) {
            let tamanhoTotal = parseFloat(estiloAtual)
            let novoTamanho = tamanhoTotal * 1.2
            paragrafo.style.fontSize = novoTamanho + 'px'
        }
    })
}

function diminuiFonte() {
    let paragrafo = document.querySelectorAll('.card-texto');
    
    paragrafo.forEach(function(paragrafo){
        let estiloAtual = window.getComputedStyle(paragrafo, null).getPropertyValue('font-size');

        if (estiloAtual) {
            let tamanhoTotal = parseFloat(estiloAtual)
            let novoTamanho = tamanhoTotal - (tamanhoTotal * 0.2)
            paragrafo.style.fontSize = novoTamanho + 'px'
        }
    })
}

//FUNÇAÕ DO SWIPERJS PARA A PARTE DOS PROJETOS
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


//FUNÇÕES PARA VERIFICAÇÃO DO FORMULÁRIO
function verificarCampos() {

    let nomeSobrenome = document.getElementById('nome-sobrenome');
    let telefone = document.getElementById('telefone');
    let email = document.getElementById('email');
    let formum = document.getElementById('formulario');

    if (!nomeSobrenome.value.trim()) {
        nomeSobrenome.classList.add('campo-vazio');
    } else {
        nomeSobrenome.classList.remove('campo-vazio');
    }

    if (!telefone.value.trim()) {
        telefone.classList.add('campo-vazio');
    } else {
        telefone.classList.remove('campo-vazio');
    }

    if (!email.value.trim()) {
        email.classList.add('campo-vazio');
    } else {
        email.classList.remove('campo-vazio');
    }

    if (!formum.value.trim()) {
        formum.classList.add('campo-vazio');    
    } else {
        formum.classList.remove('campo-vazio');
    }

    if (nomeSobrenome.validity.valid && telefone.validity.valid && email.validity.valid && formum.validity.valid) {
        enviarForm();
    } else {
        erroForm();
    }
}

function enviarForm() {

    let nomeSobrenome = document.querySelector('#nome-sobrenome');
    let telefone = document.querySelector('#telefone');
    let email = document.querySelector('#email');
    let formum = document.querySelector('#formulario')

    let nome = nomeSobrenome.value;

    Swal.fire({
    title: 'Formulário enviado',
    text: `A mensagem de ${nome} foi enviada`,
    icon: 'success',
    confirmButtonText: 'OK'
    })

    nomeSobrenome.value = ''
    telefone.value = ''
    email.value = ''
    formum.value = ''

}

function erroForm() {
    Swal.fire({
    title: 'Formulário não enviado',
    text: 'Campos faltanddo',
    icon: 'error',
    confirmButtonText: 'OK'
    })
}

let texto = document.querySelector('#formulario')
let frase = document.querySelector('#aviso-form')

texto.addEventListener('keyup', function(){
    if (texto.value.length < 10) {
        frase.innerHTML = `Mínimo 10 caracteres`
    } else {
        frase.innerHTML = ` Caracteres: ${texto.value.length}`
    }
})