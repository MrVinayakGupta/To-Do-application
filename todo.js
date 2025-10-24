
document.getElementById('add-task').addEventListener('click', function() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle complete
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.style.background = 'red';
  deleteBtn.style.color = 'white';
  deleteBtn.style.border = 'none';
  deleteBtn.style.borderRadius = '4px';
  deleteBtn.style.cursor = 'pointer';

  deleteBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent toggling complete
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById('task-list').appendChild(li);
  input.value = '';
});



// responsiveness
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
