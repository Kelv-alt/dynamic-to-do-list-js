// Setup Event Listener for Page Load
    document.addEventListener('DOMContentLoaded', function () {
      // Select DOM Elements
      const addButton = document.getElementById('add-task-btn');
      const taskInput = document.getElementById('task-input');
      const taskList = document.getElementById('task-list');

      // Create the addTask Function
      function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the input is not empty
        if (taskText === '') {
          alert('Please enter a task.');
          return;
        }

        // Create the <li> element and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add = 'remove-btn';

        // Add click event to remove the task
        removeButton.addEventListener('click', function () {
          taskList.removeChild(li);
        });

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
      }

      // Attach Event Listeners
      addButton.addEventListener('click', addTask);

      // Enable adding task with Enter key
      taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
          addTask();
        }
      });
    });





    