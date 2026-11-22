// Botão de acessibilidade
const btn = document.getElementById('btnAcessibilidade');
const menu = document.getElementById('menuAcessibilidade');

btn.addEventListener('click', () => {
  menu.classList.toggle('escondido');
});

let tamanhoFonte = 100;
function aumentarFonte() {
  tamanhoFonte += 10;
  document.body.style.fontSize = tamanhoFonte + '%';
}
function diminuirFonte() {
  tamanhoFonte -= 10;
  document.body.style.fontSize = tamanhoFonte + '%';
}
function toggleContraste() {
  document.body.classList.toggle('alto-contraste');
}
function resetarAcessibilidade() {
  tamanhoFonte = 100;
  document.body.style.fontSize = '100%';
  document.body.classList.remove('alto-contraste');
}
// Faz a foto ocupar toda a tela mesmo se mudar o tamanho da janela
function ajustarFotoTela() {
  const hero = document.querySelector('.hero-full');
  const foto = document.getElementById('fotoFundo');
  if (hero && foto) {
    hero.style.height = window.innerHeight + 'px';
    foto.style.width = '100%';
    foto.style.height = '100%';
    foto.style.objectFit = 'cover';
  }
}

// Ajusta quando abre o site e quando gira / muda o tamanho
window.addEventListener('load', ajustarFotoTela);
window.addEventListener('resize', ajustarFotoTela);
// Botão Saiba Mais abre as informações ali mesmo
const btnSaiba = document.getElementById('btnSaibaMais');
const conteudoSaiba = document.getElementById('conteudoSaibaMais');
const btnFechar = document.getElementById('btnFecharSaiba');

if (btnSaiba) {
  btnSaiba.addEventListener('click', () => {
    conteudoSaiba.classList.toggle('mostrar');
    // Muda o texto do botão
    if (conteudoSaiba.classList.contains('mostrar')) {
      btnSaiba.textContent = 'Saiba menos ↑';
      conteudoSaiba.scrollIntoView({ behavior: 'smooth' });
    } else {
      btnSaiba.textContent = 'Saiba mais ↓';
    }
  });
}

if (btnFechar) {
  btnFechar.addEventListener('click', () => {
    conteudoSaiba.classList.remove('mostrar');
    btnSaiba.textContent = 'Saiba mais ↓';
  });
}
// Clicar no Saiba Mais abre a outra página
const botaoSaiba = document.querySelector('.botao-saiba');
if (botaoSaiba) 
  botaoSaiba.addEventListener('click', function(e) {
    e.preventDefault();

    // Abre a página saiba-mais.html
    window.location.href = 'saiba-mais.html';
    // Se quiser abrir em NOVA ABA, usa essa linha em vez da de cima:

  });
  // BOTÃO VOLTAR VAI PRA PARTE INICIAL
document.addEventListener('DOMContentLoaded', () => {

  // Pega os 2 botões de voltar
  const botoesVoltar = document.querySelectorAll('#btnVoltar, #btnVoltarTopo, .botao-escuro');

  botoesVoltar.forEach(botao => {
    // Só aplica se o botão for o Voltar
    if (botao.textContent.includes('Voltar')) {
      botao.addEventListener('click', (e) => {
        e.preventDefault();

        // Volta pra página inicial, bem no topo / no começo
        window.location.href = 'index.html#inicio';
      });
    }
  });

})
// LOGO NA MESMA RETA DO MENU
document.addEventListener('DOMContentLoaded', () => {
  const topo = document.querySelector('.topo');
  const menu = document.querySelector('.menu');
  const logo = document.querySelector('.logo-grupo');

  if (topo) {
    topo.style.setProperty('display', 'flex', 'important');
    topo.style.setProperty('flex-direction', 'row', 'important');
    topo.style.setProperty('align-items', 'center', 'important');
    topo.style.setProperty('justify-content', 'space-between', 'important');
    topo.style.setProperty('flex-wrap', 'nowrap', 'important');
  }
  if (menu) {
    menu.style.setProperty('display', 'flex', 'important');
    menu.style.setProperty('flex-direction', 'row', 'important');
    menu.style.setProperty('align-items', 'center', 'important');
  }
  if (logo) {
    logo.style.height = '52px';
    logo.style.width = 'auto';
  }
});
// FOTO DENTRO DA IMAGEM GRANDE
document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.fundo-saiba, .hero, .imagem-grande');
  const foto = document.querySelector('.foto-fundo, .hero img, .imagem-grande img');
  const topo = document.querySelector('.topo');

  if (!container || !foto) return;

  // 1. CONTAINER GRANDE
  container.style.setProperty('position', 'relative', 'important');
  container.style.setProperty('width', '100%', 'important');
  container.style.setProperty('height', '100vh', 'important');
  container.style.setProperty('overflow', 'hidden', 'important');
  container.style.setProperty('display', 'flex', 'important');
  container.style.setProperty('justify-content', 'center', 'important');
  container.style.setProperty('align-items', 'center', 'important');
  container.style.setProperty('background', '#000', 'important');
  container.style.setProperty('padding', '0', 'important');

  // 2. FOTO DENTRO DA IMAGEM GRANDE
  foto.style.setProperty('position', 'absolute', 'important');
  foto.style.setProperty('top', '50%', 'important');
  foto.style.setProperty('left', '50%', 'important');
  foto.style.setProperty('transform', 'translate(-50%, -50%)', 'important');
  foto.style.setProperty('width', '100%', 'important');
  foto.style.setProperty('height', '100%', 'important');
  foto.style.setProperty('max-width', '100%', 'important');
  foto.style.setProperty('max-height', '100%', 'important');
  foto.style.setProperty('object-fit', 'contain', 'important'); // dentro, sem cortar
  foto.style.setProperty('object-position', 'center', 'important');
  foto.style.setProperty('z-index', '1', 'important');

  // 3. AJUSTA SOZINHO QUANDO GIRAR O CELULAR / MUDAR A TELA
  function ajustarFoto() {
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const proporcaoTela = larguraTela / alturaTela;
    const proporcaoFoto = foto.naturalWidth / foto.naturalHeight;

    // Se a foto for mais larga que a tela, encaixa pela largura
    // Se for mais alta, encaixa pela altura - sempre dentro
    if (proporcaoFoto > proporcaoTela) {
      foto.style.setProperty('width', '100%', 'important');
      foto.style.setProperty('height', 'auto', 'important');
    } else {
      foto.style.setProperty('width', 'auto', 'important');
      foto.style.setProperty('height', '100%', 'important');
    }
  }

  // Espera a foto carregar pra medir certo
  if (foto.complete) {
    ajustarFoto();
  } else {
    foto.addEventListener('load', ajustarFoto);
  }
  window.addEventListener('resize', ajustarFoto);

  // 4. CABEÇALHO POR CIMA, MESMA LINHA
  if (topo) {
    topo.style.setProperty('position', 'fixed', 'important');
    topo.style.setProperty('top', '0', 'important');
    topo.style.setProperty('left', '0', 'important');
    topo.style.setProperty('width', '100%', 'important');
    topo.style.setProperty('display', 'flex', 'important');
    topo.style.setProperty('flex-direction', 'row', 'important');
    topo.style.setProperty('align-items', 'center', 'important');
    topo.style.setProperty('justify-content', 'space-between', 'important');
    topo.style.setProperty('z-index', '100', 'important');
  }

  // 5. LOGO CLIQUE: INICIAL -> SAIBA MAIS / SAIBA MAIS -> INÍCIO
  const logoSaiba = document.getElementById('logoSaibaMais');
  const logoVoltar = document.getElementById('logoVoltarInicio');

  if (logoSaiba) {
    logoSaiba.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'saiba-mais.html';
    });
  }
  if (logoVoltar) {
    logoVoltar.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html#inicio';
    });
  }
});
// BOLINHA QUE ANDA NO MENU - ATIVIDADES <-> GALERIA <-> CONTATO
document.addEventListener('DOMContentLoaded', () => {

  const linksMenu = document.querySelectorAll('.topo .menu a');

  // Se não tiver menu, não faz nada
  if (!linksMenu.length) return;

  // 1. QUANDO CLICA, TIRA A BOLINHA DO ANTERIOR E COLOCA NO NOVO
  linksMenu.forEach(link => {
    link.addEventListener('click', (e) => {

      // Tira a bolinha de todos
      linksMenu.forEach(l => l.classList.remove('ativo'));

      // Coloca a bolinha só no que clicou
      link.classList.add('ativo');

      // Se for link de seção (#atividades, #galeria), rola suave até ela
      const destino = link.getAttribute('href');
      if (destino && destino.startsWith('#')) {
        e.preventDefault();
        const secao = document.querySelector(destino);
        if (secao) {
          secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 2. QUANDO ROLA A PÁGINA, A BOLINHA ANDA SOZINHA
  const secoes = document.querySelectorAll('#atividades, #galeria, #contato');

  if (secoes.length) {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          // Tira de todos
          linksMenu.forEach(l => l.classList.remove('ativo'));
          // Coloca no que está na tela
          const linkAtivo = document.querySelector(`.topo .menu a[href="#${entrada.target.id}"]`);
          if (linkAtivo) {
            linkAtivo.classList.add('ativo');
          }
        }
      });
    }, {
      threshold: 0.4 // quando 40% da seção aparecer, troca a bolinha
    });

    secoes.forEach(secao => observador.observe(secao));
  }

  // 3. QUANDO ABRE A PÁGINA, JÁ DEIXA O PRIMEIRO SEM BOLINHA
  // Se quiser que Atividades já comece com bolinha, descomenta:
  // document.querySelector('.topo .menu a[href="#atividades"]')?.classList.add('ativo');

});