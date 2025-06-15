 document.addEventListener('DOMContentLoaded', function () {
      const addButton = document.getElementById('add-task-btn');
      const taskInput = document.getElementById('task-input');
      const taskList = document.getElementById('task-list');

      let tasks = [];

      // Load tasks from Local Storage
      function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
          tasks = JSON.parse(storedTasks);
          tasks.forEach(task => addTaskToDOM(task));
        }
      }

      // Save tasks array to Local Storage
      function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }

      // Add a single task to the DOM
      function addTaskToDOM(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        removeButton.addEventListener('click', function () {
          taskList.removeChild(li);
          tasks = tasks.filter(t => t !== taskText); // Remove from array
          saveTasks(); // Update storage
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
      }

      // Handle new task addition
      function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
          alert('Please enter a task.');
          return;
        }

        // Add to DOM and task array
        addTaskToDOM(taskText);
        tasks.push(taskText);
        saveTasks();

        taskInput.value = ''; // Clear input
      }

      // Event listeners
      addButton.addEventListener('click', addTask);
      taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
          addTask();
        }
      });

      loadTasks(); // Load tasks on page load
    });