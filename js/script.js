// Header aparecer com o scroll
window.addEventListener("scroll", () => {
    const posScroll = window.pageYOffset;

    if( $(window).width() >= 1050){
        if(posScroll >= 500 && posScroll <= 550){
            $('header').css('display', 'flex')
            $('header').css('top', '-70px')
            $('header').animate({
                top: '0px'
            }, 20)
        }
        else if(posScroll <= 400){
            $('header').animate({
                top: '-70px'
            }, 20)
        }
    }
})

// Conexão com a API



// Formulário
const butao = document.getElementById('butao');

butao.addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    const numero = document.getElementById('numero').value;

    if(email == '' || numero == '' || email == '' && numero == ''){
        alert('Por favor preencha os campos acima')
    }
    else{
        if(email.indexOf('@') == -1){
            alert('Por favor colocar um e-mail válido')
        } 
        else if(numero.toString().length < 8){
            alert('Por favor colocar um numero válido')
        }
        else{
            $('.form-none').css('display', 'none')
            $('.titulo-form').text('Obrigado por contatar a gente');
        }
    }    
})