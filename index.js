function addToDo() {


    const task = {
        name: document.getElementById("task").value,
        id: Date.now(), /*Here we have chosen to use the Date.now()method to generate a unique id for our tasks.*/
    };
    const toDo = document.getElementById("toDo");

    event.preventDefault();
    document.addEventListener("DOMToDosLoaded", addLocalToDo(task['id']));
    const toDoDiv = document.getElementById("list");
    const newToDo = document.createElement("li");
    toDoDiv.appendChild(newToDo);  /*here we append the element to whichever element we choose.  In this case, we are choosing to append the newly created list item to our newly created list element*/

    newToDo.innerText = task.name;

    /*This is how we will display the text that the user has input for their tasks.  The.name is where we have selected the specific key ('name') of the object ('task')that we would like to display (within our 'newToDo'variable).  We previously were using a similar method, using .value.  The .value inputs the specific text (the "values" as it were) that the user types.*/

    newToDo.classList.add('todo-item');  /**Here we are adding a class to the newly created html element.  This of course, will allow us to style our element. */

    //addLocalToDo(task['id']);/*add todo to local storage*/

    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';/*here we use .innerHTML to add our button element as an icon, using the <i></i> element, and we use the class from the font - awesome cdn which we linked in the head of our html file.  Adding the button as an icon is obviously not critical, just a fun step for some styling.*/
    removeBtn.classList.add('trash-btn');
    removeBtn.addEventListener("click", function () {
        removeBtn.remove(); newToDo.remove();
        removeLocalToDo(task['id'])
    });/*Onclick.our button will remove the newToDo fromthe GUI, and from localStorage.*/

    toDoDiv.appendChild(removeBtn);
    task.value = ""; /*this will clear the input field for the next task input*/
};

function addLocalToDo(task) {
    let toDoText;
    if (localStorage.getItem('toDoText') === null) {
        toDoText = [];/*here we check if we already have a todo array, and if not, we will create an empty array*/
    } else {
        toDoText = JSON.parse(localStorage.getItem('toDoText'));
    }/*and if we DO have a todo array, we will return it as a parsed array*/
    toDoText.push(task);
    localStorage.setItem(task, JSON.stringify(toDoText));
    /*and we will also push other new todos to local storage*/
};

function removeLocalToDo(taskId) {

    let toDoText = localStorage.getItem(taskId);

    if (toDoText !== null) {
        let removedData = localStorage.removeItem(taskId);
    }
};

