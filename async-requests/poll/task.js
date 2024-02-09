document.addEventListener('DOMContentLoaded', function () {
  const pollTitleElement = document.getElementById('poll__title');
  const pollAnswersContainer = document.getElementById('poll__answers');

  async function fetchPollData() {
      try {
          const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
          const data = await response.json();
          displayPoll(data.data);
      } catch (error) {
          console.error('Error fetching poll data:', error);
      }
  }

  function displayPoll(pollData) {
      pollTitleElement.textContent = pollData.title;
      pollAnswersContainer.innerHTML = '';

      pollData.answers.forEach(answer => {
          const answerButton = createAnswerButton(answer);
          answerButton.addEventListener('click', showConfirmationDialog);
          pollAnswersContainer.appendChild(answerButton);
      });
  }

  function createAnswerButton(answer) {
      const answerButton = document.createElement('button');
      answerButton.classList.add('poll__answer');
      answerButton.textContent = answer;
      return answerButton;
  }

  function showConfirmationDialog() {
      alert('Спасибо, ваш голос засчитан!');
  }

  fetchPollData();
});
