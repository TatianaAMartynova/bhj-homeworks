document.addEventListener('DOMContentLoaded', function () {
    const progress = document.getElementById('progress');
    const form = document.getElementById('form');
    const fileInput = document.getElementById('file');
    const sendButton = document.getElementById('send');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      const xhr = new XMLHttpRequest();
  
      xhr.upload.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          progress.value = percentComplete;
        }
      });
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          
          if (xhr.status === 200) {
            alert('Файл успешно загружен!');
          } else {
            alert('Ошибка загрузки файла. Пожалуйста, попробуйте еще раз.');
          }
        }
      };
  
      xhr.open('POST', form.action, true);
      xhr.send(formData);
    });
  });
  