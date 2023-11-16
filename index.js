document.addEventListener('DOMContentLoaded', function() {
  var todoInput = document.getElementById('todo');
  var editTaskInput = document.getElementById('editTask');
  var saveButton = document.getElementById('saveButton');
  var cancelButton = document.getElementById('cancelButton');
  var listTache = document.getElementById('listTache');
  var editButton = document.getElementById('editButton');
  var supprimeButton = document.getElementById('supprimeButton');

  document.getElementById('ajouterButton').addEventListener('click', function() {
    var todoValue = todoInput.value.trim();
    if (todoValue !== '') {
      addTaskToList(todoValue);
      todoInput.value = '';
    }
  });

  function addTaskToList(task) {
    var listItem = document.createElement('li');

    var radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'taskRadio';
    radioInput.value = task;

    listItem.appendChild(radioInput);
    listItem.appendChild(document.createTextNode(task));

    listTache.appendChild(listItem);

    
  }

  editButton.addEventListener('click', function() {
    var selectedRadio = document.querySelector('input[name="taskRadio"]:checked');
    if (selectedRadio) {
      editTaskInput.value = selectedRadio.nextSibling.textContent.trim();
    } else {
      alert('Please select a task to edit.');
    }
  });

  cancelButton.addEventListener('click', function() {
    editTaskInput.value = '';
  });

  saveButton.addEventListener('click', function() {
    var selectedRadio = document.querySelector('input[name="taskRadio"]:checked');
    if (selectedRadio) {
      selectedRadio.nextSibling.textContent = editTaskInput.value;
      editTaskInput.value = '';
    } else {
      alert('Please select a task to save.');
    }
  });

  supprimeButton.addEventListener('click', function() {
    var selectedRadio = document.querySelector('input[name="taskRadio"]:checked');
    if (selectedRadio) {
      var listItem = selectedRadio.parentNode;
      listItem.remove();
      editTaskInput.value = '';
    } else {
      alert('Please select a task to delete.');
    }
  });
});
