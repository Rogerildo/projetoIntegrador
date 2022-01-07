/*-------------------------- carousel ---------------------------------*/

var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .image')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var back = document.getElementById('back')
var rolar = true

for (let i = 0; i < quant.length; i++) {
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls div')

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
        atual = pos[i].id
        rolar = false
        slide()
    })
}

back.addEventListener('click', () => {
    atual--
    rolar = false
    slide()
})
next.addEventListener('click', () => {
    atual++
    rolar = false
    slide()
})

function slide() {
    if (atual >= quant.length) {
        atual = 0
    }
    else if (atual < 0) {
        atual = quant.length - 1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -90 * atual + 'rem'
    document.getElementById(atual).classList.add('imgAtual')
}
setInterval(() => {
    if (rolar) {
        atual++
        slide()
    } else {
        rolar = true
    }
}, 5000)
slide()



// Carrossel de imagens
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter + '-carousel').checked = true;
    counter++;
    if(counter > 4) {
        counter = 1
    }
}, 4000);


// Cards promotions (section Super Promoções)
$('.cards-promotions-container').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: false,
                dots: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: false,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
            }
        },
    ]
});





