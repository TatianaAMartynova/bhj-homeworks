document.addEventListener('DOMContentLoaded', function () {
   
    function fetchData(url) {
      return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Ошибка при загрузке данных', error));
    }
  
    function displayPoll(pollData) {
      const pollTitleElement = document.getElementById('poll__title');
      const pollAnswersElement = document.getElementById('poll__answers');
  
      pollTitleElement.textContent = '';
      pollAnswersElement.innerHTML = '';
  
      pollTitleElement.textContent = pollData.data.title;
  
      pollData.data.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.classList.add('poll__answer');
        answerButton.textContent = answer;
        answerButton.addEventListener('click', () => {
          
          alert('Спасибо, ваш голос засчитан!');
        });
  
        pollAnswersElement.appendChild(answerButton);
      });
    }
  
    fetchData('https://students.netoservices.ru/nestjs-backend/poll')
      .then(pollData => {
       
        displayPoll(pollData);
      });
  });
  