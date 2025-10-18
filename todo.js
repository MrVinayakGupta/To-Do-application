// let p = document.createElement('p');

// p.innerText= "hey i am vinayak gupta";

// let body = document.querySelector("body"); 

// body.append(p);

// let h1= document.createElement("h1");

// h1.innerText=" hey i am blue h1";
// h1.style.color='blue';

// body.append(h1);

// let div= document.createElement("div");
// div.style.backgroundColor=black;

// body.appendchild(div);

// div.appendChild(p);
// div.appendChild(h1);

// for (let i=1; i<10; i++){
//     console.log(i);
// }



// script.js
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