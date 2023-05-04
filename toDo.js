// Create a class for the element
class toDo extends HTMLUListElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      const shadow = this.attachShadow({mode: 'open'});
  
      const div = document.createElement('div');
      shadow.appendChild(div);

    }
  }

  const add = document.querySelector('.add');
  const remove = document.querySelector('.remove');
  
  remove.disabled = true;

  let toDoList = document.getElementById('ULtoDo');
  let tasksList = ["Clean room", "Finish homework", "Buy groceries", "Check email", "Study", "Laundry", "Wash dishes", "Write paper", "Exercise", "Meditate"];
  let myList = [];
  
  add.onclick = function() {
    rand = Math.floor(Math.random()*10);
    myList.push(tasksList[rand]);
    let li = document.createElement('li');
    li.innerText = tasksList[rand];
    toDoList.appendChild(li);
  
    remove.disabled = false;
    add.disabled = false;
  };
  
  remove.onclick = function() {
    var max = document.getElementById('ULtoDo').getElementsByTagName('li').length;
    i = Math.floor(Math.random()*max);
    var ulElement = document.getElementById('ULtoDo');
    ulElement.removeChild(ulElement.children[i]);
  
    remove.disabled = false;
    add.disabled = false;
  };