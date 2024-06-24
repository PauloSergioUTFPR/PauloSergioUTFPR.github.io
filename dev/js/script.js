

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    // Remove a classe de animação após um scroll inicial
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('no-animation');
        } else {
            navbar.classList.remove('no-animation');
        }
    });
});

$(document).ready(function() {
    // Adiciona evento ao clicar no botão de próxima imagem
    $('#carouselExampleControls').on('slide.bs.carousel', function () {
        $('.carousel-item').css('transition', 'transform 1s ease-in-out');
    });
});
