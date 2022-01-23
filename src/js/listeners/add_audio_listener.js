export default function addAudioToggleListener() {
  const audioToggleEl = document.getElementById('audio-toggle');
  audioToggleEl.addEventListener('click', e => {
    audioToggleEl.classList.toggle('fa-volume-up');
    audioToggleEl.classList.toggle('fa-volume-mute');
  });
}