const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
const bgGif = document.querySelector('.bg-gif');
const audioText = document.getElementById('audio-text');
const audioPlayer = document.getElementById('audioplayer');
const audioSource = document.querySelector('#audioplayer source');

// Verifica e define o modo com base no tema salvo
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    bgGif.src = 'imagens/chill-night.gif';
    toggleButton.textContent = 'Inward';
    audioText.textContent = "and after it, comes the Sun";
    audioSource.src = 'audio/dark-mode.mp3';
} else {
    audioSource.src = 'audio/light-mode.mp3';
}

// Carrega o áudio quando a página é carregada
audioPlayer.load();

// Função para iniciar o áudio ao clicar na página
function playAudioOnInteraction() {
    audioPlayer.play().catch((error) => {
        console.log("Reprodução automática bloqueada até interação com a página.");
    });
    // Remove o evento após a primeira interação
    window.removeEventListener('click', playAudioOnInteraction);
}

// Adiciona o evento de clique para garantir que o áudio toque na interação inicial
window.addEventListener('click', playAudioOnInteraction);

// Adiciona evento ao botão de alternância de modo
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        bgGif.src = 'imagens/chill-night.gif';
        toggleButton.textContent = 'Inward';
        audioText.textContent = "and after it, comes the Sun";
        audioSource.src = 'audio/dark-mode.mp3';
        localStorage.setItem('theme', 'dark');
    } else {
        bgGif.src = 'imagens/chill-sunset.gif';
        toggleButton.textContent = 'Journey';
        audioText.textContent = "fear not, cause in the darkest nights, the brighter the stars";
        audioSource.src = 'audio/light-mode.mp3';
        localStorage.setItem('theme', 'light');
    }

    // Troca de música com pausa e carregamento
    audioPlayer.pause();
    audioPlayer.load();
    audioPlayer.play().catch(() => {
        console.log('Reprodução bloqueada até interação com a página.');
    });
});