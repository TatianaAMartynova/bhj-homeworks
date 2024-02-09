document.addEventListener('DOMContentLoaded', function () {
  const progress = document.getElementById('progress');
  const form = document.getElementById('form');

  form.addEventListener('submit', async function (event) {
      event.preventDefault();

      try {
          const formData = new FormData(form);
          const xhr = new XMLHttpRequest();

          xhr.upload.addEventListener('progress', updateProgress);

          xhr.addEventListener('load', handleLoad);
          xhr.addEventListener('error', handleError);
          xhr.addEventListener('abort', handleAbort);

          xhr.open('POST', form.action, true);
          xhr.send(formData);
      } catch (error) {
          console.error('Error during form submission:', error);
      }
  });

  function updateProgress(event) {
      if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          progress.value = percentComplete;
      }
  }

  function handleLoad() {
      if (xhr.status === 200) {
          alert('Файл успешно загружен!');
      } else {
          alert('Произошла ошибка при загрузке файла. Пожалуйста, повторите попытку.');
      }
  }

  function handleError() {
      alert('Произошла ошибка при загрузке файла. Пожалуйста, повторите попытку.');
  }

  function handleAbort() {
      alert('Загрузка файла была отменена.');
  }
});
