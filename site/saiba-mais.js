// Rolar suave até a história
const btnHistoria = document.getElementById('btnVerHistoria');
if (btnHistoria) {
  btnHistoria.addEventListener('click', () => {
    document.getElementById('historia').scrollIntoView({ behavior: 'smooth' });
  });
}

// Acordeão - abre e fecha os textos
const titulos = document.querySelectorAll('.titulo-acordeao');
titulos.forEach((titulo) => {
  titulo.addEventListener('click', () => {
    const conteudo = titulo.nextElementSibling;
    conteudo.classList.toggle('aberto');
  });
});

// Garante que a foto fique atrás do texto
window.addEventListener('load', () => {
  const foto = document.querySelector('.fundo-saiba .foto-fundo');
  if (foto) {
    foto.style.position = 'fixed';
    foto.style.top = '0';
    foto.style.left = '0';
    foto.style.width = '100vw';
    foto.style.height = '100vh';
    foto.style.objectFit = 'cover';
    foto.style.zIndex = '-2';
  }
});