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

// res.setHeader("Access-Control-Allow-Origin", "*");

// Conexão com a api
function pegaAPI(url){
    let request = new XMLHttpRequest()

    request.open("GET", url, false)

    request.send()

    return request.responseText
}

data = pegaAPI(`https://reviews-clear-view.onrender.com/api/v1/reviews`)
const dataToJson = JSON.parse(data)
const reviews = dataToJson.reviews.data

console.log(reviews)

const reviews_container = document.getElementById('reviews-container');
reviews.forEach(reviews => {
    reviews_container.innerHTML += `<div class="review">
    <div>
        <img src="/img/icone.png" alt="icone">

        <h4>${reviews.nome}</h4>

        <div class="estrelas">
            <img src="/img/estrela.png" alt="estrela">
            <img src="/img/estrela.png" alt="estrela">
            <img src="/img/estrela.png" alt="estrela">
            <img src="/img/estrela.png" alt="estrela">
            <img src="/img/estrela.png" alt="estrela">
        </div> 
    </div>
    

    <div class="center-p">
        <p>${reviews.texto}</p>   
    </div>
</div>`
});




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