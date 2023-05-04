// Create a class for the element
class countTasks extends HTMLParagraphElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // count list items in element's parent element
      const lcParent = this.parentNode;
      
      function countTasks(node){
        const task = node.getElementsByTagName('li').length;
        return task;
      }
      
      const count = `Tasks Remaining: ${countTasks(lcParent)}`;
  
      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
  
      // Create text node and add count to it
      const text = document.createElement('span');
      text.textContent = count;
  
      // Append it to the shadow root
      shadow.appendChild(text);
  
      // Update count when element content changes
      setInterval(function() {
        const count = `Tasks Remaining: ${countTasks(lcParent)}`;
        text.textContent = count;
      }, 200);
    }
  }
  
  // Define the new element
  customElements.define('count-tasks', countTasks, { extends: 'p' });