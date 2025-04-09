let tamanhoFonte = 16;

function alterarFonte(acao) {
  if (acao === '+' && tamanhoFonte < 26) {
    tamanhoFonte += 2;
  } else if (acao === '-' && tamanhoFonte > 10) {
    tamanhoFonte -= 2;
  }
  document.documentElement.style.setProperty('--fonte-base', `${tamanhoFonte}px`);
}

function alternarContraste() {
  document.body.classList.toggle('contraste');
}

function mostrarInformacoesPais(event) {
  const info = event.target.getAttribute('data-info');
  if (info) {
    alert(info); // Exibe as informações em um alert. Você pode personalizar como quiser.
  }
}

document.querySelectorAll('.galeria img').forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.style.cursor = 'pointer'; // Muda o cursor para indicar que a imagem é clicável
  });

  img.addEventListener('click', mostrarInformacoesPais);
});
// Função para ler o texto em voz alta
function lerTexto() {
    // Verifica se a API SpeechSynthesis está disponível no navegador
    if ('speechSynthesis' in window) {
      const textoParaLer = document.querySelector('#inicio p').textContent; // Pegando o conteúdo do parágrafo
      const sintetizador = window.speechSynthesis; // Usando a API SpeechSynthesis do navegador
      const fala = new SpeechSynthesisUtterance(textoParaLer); // Criando a fala com o conteúdo
  
      // Inicia a leitura
      sintetizador.speak(fala);
    } else {
      alert("A funcionalidade de leitura por voz não está disponível no seu navegador.");
    }
  }
  
  // Função para ler todo o texto da página
function lerTexto() {
    // Verifica se a API SpeechSynthesis está disponível no navegador
    if ('speechSynthesis' in window) {
      const sintetizador = window.speechSynthesis;
  
      // Seleciona todos os textos da página (títulos, parágrafos, etc)
      const textos = document.querySelectorAll('h1, h2, p, li'); // Você pode adicionar mais seletores se precisar
  
      // Criando uma string com todo o conteúdo de texto da página
      let textoParaLer = '';
      textos.forEach(elemento => {
        textoParaLer += elemento.textContent + '\n'; // Adiciona o conteúdo de cada elemento
      });
  
      // Cria o objeto de fala
      const fala = new SpeechSynthesisUtterance(textoParaLer);
  
      // Inicia a leitura
      sintetizador.speak(fala);
    } else {
      alert("A funcionalidade de leitura por voz não está disponível no seu navegador.");
    }
  }
  