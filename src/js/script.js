// Aguarda o carregamento da página antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {

    // Captura o elemento onde o texto será escrito
    const typingElement = document.getElementById("typing");
  
    // Define o texto que será digitado
    const text = "Treinos exclusivos para você!";
    
    let index = 0; // Índice da letra atual
  
    function typeText() {
      // Atualiza o conteúdo com a parte do texto digitada até agora
      typingElement.textContent = text.slice(0, index);
  
      index++; // Avança para a próxima letra
  
      // Quando chega ao fim do texto, reinicia para repetir o loop
      if (index > text.length) {
        index = 0;
      }
    }
  
    // Chama a função a cada 150ms para simular a digitação
    setInterval(typeText, 250);
  });
  