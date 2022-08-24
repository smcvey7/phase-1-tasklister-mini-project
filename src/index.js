document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    handleTodo(e.target['new-task-description'].value);
    form.reset();
  })
});

const redTasks = document.querySelector('#redTasks')
const orangeTasks = document.querySelector('#orangeTasks')
const greenTasks = document.querySelector('#greenTasks')


function handleTodo(todo){
  let li = document.createElement('li');
  let btn = document.createElement('button')
  let urgentness = document.querySelector('#urgency').value;
  btn.textContent = 'complete'
  li.textContent = `${todo} `
  li.className = `${urgentness}urgent`
  li.appendChild(btn)
  btn.addEventListener('click', handleDelete)
  if (urgentness === '0'){
    greenTasks.appendChild(li);
    li.style.color = 'white'
  }else if (urgentness === '1'){
    orangeTasks.appendChild(li);
    li.style.color = 'white'
  }else{
    redTasks.appendChild(li);
    li.style.color = 'white'
  }
}

function handleDelete(e){
  e.target.parentNode.remove()
}

let range = document.getElementById('urgency');

