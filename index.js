/*COMPONENTS NEEDED:
items saved as objects,
with a key (toDo text)
and ID key
which is a random number

*/
/*First, we get our elements and create the corresponding variables.*/




function addToDo(){ 
  

  const task = {
    name:document.getElementById("task").value,
    id:Date.now(), /*Here we have chosen to use the Date.now()method to generate a unique id for our tasks.*/
  }
  const toDo = document.getElementById("toDo");
  const date = document.getElementById("date");
  event.preventDefault();
  document.addEventListener("DOMToDosLoaded", addLocalToDo);
  const toDoDiv = document.getElementById("list");
  const newToDo = document.createElement("li");
  toDoDiv.appendChild(newToDo);  /*here we append the element to whichever element we choose.  In this case, we are choosing to append the newly created list item to our newly created list element*/
 
  newToDo.innerText = task.name;
  
/*This is how we will display the text that the user has input for their tasks.  The.name is where we have selected the specific key ('name') of the object ('task')that we would like to display (within our 'newToDo'variable).  We previously were using a similar method, using .value.  The .value inputs the specific text (the "values" as it were) that the user types.*/
  
  newToDo.classList.add('todo-item');  /**Here we are adding a class to the newly created html element.  This of course, will allow us to style our element. */
  
  addLocalToDo(task);/*add todo to local storage*/
  
  const removeBtn = document.createElement('button');
  removeBtn.innerHTML='<i class="fas fa-trash"></i>';/*here we use .innerHTML to add our button element as an icon, using the <i></i> element, and we use the class from the font - awesome cdn which we linked in the head of our html file.  Adding the button as an icon is obviously not critical, just a fun step for some styling.*/
  removeBtn.classList.add('trash-btn');
  removeBtn.addEventListener("click", function() { removeBtn.remove(); newToDo.remove();     
                                                  removeLocalToDo(task);});/*Onclick.our button will remove the newToDo fromthe GUI, and from localStorage.*/
 
  toDoDiv.appendChild(removeBtn);
  task.value = ""; /*this will clear the input field for the next task input*/

function addLocalToDo(toDo){
  let toDoText;  
  if(localStorage.getItem('toDoText') === null){
    toDoText = [];/*here we check if we already have a todo array, and if not, we will create an empty array*/
  }else{
    toDoText = JSON.parse(localStorage.getItem('toDoText'));
  }/*and if we DO have a todo array, we will return it as a parsed array*/
  toDoText.push(toDo); 
  localStorage.setItem('toDoText',JSON.stringify(toDoText));
}/*and we will also push other new todos to local storage*/
}
function removeLocalToDo(toDo){
   
  let toDoText; 
  if(localStorage.getItem('toDoText') === null){
    toDoText = [];
  }else{
    toDoText = JSON.parse(localStorage.removeItem(toDo));
  }
  toDoText.push(toDo); 
  localStorage.setItem('toDoText',JSON.stringify(toDoText));
  
  toDoText.forEach(function(toDo){
  const toDoIndex = toDo.children[0].innerText; /*This is how we identify the (inner text of the) most recent toDo, which we will also be deleting fromlocalStorage when we delete from GUI with 'removeBtn'.*/
  toDoText.splice(toDoText.indexOf(toDoIndex), 1); /*this indicates from what position we want to remove an element, and how many we want to remove (1)*/
  localStorage.setItem('toDoText', JSON.stringify(toDoText));/*Once we remove the desired index from the array, we must update our local storage to reflect the removal */
  });
}

