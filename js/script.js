const submitButton = document.querySelector('.btn-submit');
const radioInput = document.querySelectorAll('input[type=radio]');
const rating = document.querySelector('.selected-rating');
const mainCard = document.querySelector('.card');
const thankYouCard = document.querySelector('.card-thank-you');

function getRating() {
  let selectedRating;
  for (let i = 0; i < radioInput.length; i++) {
    if (radioInput[i].checked) {
      selectedRating = radioInput[i].value;
    }
  }
  return selectedRating;
}

submitButton.addEventListener('click', () => {
  rating.textContent = `You selected ${getRating()} out of 5`;
  mainCard.classList.add('hidden');
  thankYouCard.classList.remove('hidden');
});
