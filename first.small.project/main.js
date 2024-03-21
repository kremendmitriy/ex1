const btnMinus = document.querySelector('.form_btn-minus');
const btnPlus = document.querySelector('.form_btn-plus');
const outputField = document.getElementById('inputField');

const gifContainer = document.querySelector('.gifImage');
const gifUrl = 'https://media.tenor.com/7aoWtEmB45EAAAAi/ricardo-milos.gif';

const audio = document.querySelector('.audio');

let counter = 0;

function playMusic() {
   if (audio.paused) {
      audio.play();
   }
}

function pauseMusic() {
   if (!audio.paused) {
      audio.pause();
   }
}

function checkCounter() {
   if (counter === 69) {
      playMusic();
   }
}

function toggleGifVisibility(show) {
   if (show) {
      gifContainer.style.display = 'block';
   } else {
      gifContainer.style.display = 'none';
   }
}

function count() {
   btnPlus.onclick = function () {
      counter++;
      outputField.value = counter;
      if (counter === 69) {
         toggleGifVisibility(true);
         outputField.value = 'Ой как зря';
         checkCounter();
      } else if (counter !== 69 && gifContainer.style.display !== 'none') {
         pauseMusic();
         toggleGifVisibility(false);
      }
   };

   btnMinus.onclick = function () {
      counter--;
      outputField.value = counter;
      if (counter === 69) {
         toggleGifVisibility(true);
         outputField.value = 'Ой как зря';
         checkCounter();
      } else if (counter !== 69 && gifContainer.style.display !== 'none') {
         pauseMusic();
         toggleGifVisibility(false);
      }
   };
}

count();
// https://c.tenor.com/n9Hl8cEdNV4AAAAC/tenor.gif
