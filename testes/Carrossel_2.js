const slides = document.querySelector('.slides');
const slideWidth = 150; // Largura de cada slide (ajuste conforme suas imagens)

let currentSlide = 0;

function showSlide() {
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 18; // 18 é o número total de slides (ajuste conforme suas imagens)
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + 18) % 18; // 18 é o número total de slides (ajuste conforme suas imagens)
  showSlide();
}

document.getElementById('prev-button').addEventListener('click', prevSlide);
document.getElementById('next-button').addEventListener('click', nextSlide);

// Iniciar a transição automática a cada 10 segundos
setInterval(nextSlide, 10000);
