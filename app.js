window.addEventListener('keydown', function (e) {
  const selectedAudio = document.querySelector(`audio[data-key="${e.key}"]`);
  const selectedKeyboard = document.querySelector(`div[data-key="${e.key}"]`);
  selectedKeyboard.style.borderColor = 'orange';
  selectedKeyboard.style.fontWeight = '700';
  this.setTimeout(() => {
    selectedKeyboard.style.borderColor = 'black';
    selectedKeyboard.style.fontWeight = '500';
  }, 200);
  console.log(selectedKeyboard);
  console.log(selectedAudio);
  selectedAudio.currentTime = 0;
  selectedAudio.play();
});
