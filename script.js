// Pegando o input da barra de progresso
let progress = document.getElementById('progressBar');
let isPlaying = false; // Começa pausado
let interval; // Vai guardar o setInterval
let currentTrack = 0; // Índice da música atual

// Lista das faixas só pra referência
const tracks = [
  "Autumn Leaves - Chet Baker",
  "Take Five - Dave Brubeck",
  "So What - Miles Davis",
  "My Favorite Things - John Coltrane",
  "Blue in Green - Bill Evans",
  "Misty - Erroll Garner",
  "In a Sentimental Mood - Duke Ellington",
  "All the Things You Are - Ella Fitzgerald",
  "Moanin' - Art Blakey",
  "Round Midnight - Thelonious Monk"
];

// Atualiza o visual da playlist com a faixa tocando
function updateTrackSelection() {
  const trackItems = document.querySelectorAll('.playlist li');
  trackItems.forEach((item, index) => {
    item.classList.toggle('playing', index === currentTrack);
  });
}

// Botão de play/pause: alterna e simula o progresso
function playPause() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    interval = setInterval(() => {
      if (progress.value < 100) {
        progress.value++;
      } else {
        clearInterval(interval);
        isPlaying = false;
        nextTrack(); // Quando acaba, toca a próxima
      }
    }, 500); // Meio segundo por tick, só pra ver funcionando rápido
  } else {
    clearInterval(interval); // Pause = para o intervalo
  }
}

// Vai pra próxima faixa
function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  progress.value = 0;
  updateTrackSelection();
}

// Volta pra anterior (com looping bonitinho)
function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  progress.value = 0;
  updateTrackSelection();
}

// Toca uma faixa aleatória (pode ser legal pra adicionar depois num botão)
function shuffleTracks() {
  currentTrack = Math.floor(Math.random() * tracks.length);
  progress.value = 0;
  updateTrackSelection();
}