document.addEventListener('DOMContentLoaded', function () {
  const tasksForm = document.getElementById('tasks__form');
  const taskInput = document.getElementById('task__input');
  const tasksList = document.getElementById('tasks__list');

  tasksForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const taskTitle = taskInput.value.trim();

      if (taskTitle !== '') {
          addTask(taskTitle);
          taskInput.value = '';
      }
  });

  function addTask(title) {
      const taskTemplate = `
          <div class="task">
              <div class="task__title">
                  ${title}
              </div>
              <a href="#" class="task__remove">&times;</a>
          </div>
      `;

      tasksList.insertAdjacentHTML('afterbegin', taskTemplate);
  }

  tasksList.addEventListener('click', function (e) {
      const target = e.target;

      if (target.classList.contains('task__remove')) {
          removeTask(target.closest('.task'));
      }
  });

  function removeTask(task) {
      tasksList.removeChild(task);
  }
});
