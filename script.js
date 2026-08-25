let totalLikes = 0;

const btnLike = document.getElementById('btn-like');
const contadorElemento = document.getElementById('contador-likes');

btnLike.addEventListener('click', () => {
  // Incrementa a quantidade de curtidas
  totalLikes++;
  
  // Atualiza o texto no HTML
  contadorElemento.textContent = totalLikes;

  // Adiciona a animação visual no número
  contadorElemento.classList.remove('animar-contador');
  void contadorElemento.offsetWidth; // Força o reflow do navegador para reiniciar a animação
  contadorElemento.classList.add('animar-contador');
});
