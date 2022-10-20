function addToDo(event) {

    event.preventDefault();
<<<<<<< HEAD
=======

>>>>>>> 2220513d296350d650bb581166ed1a568a8a327f
    const toDoInput = document.getElementById("task");
    const task = {
        name: toDoInput.value,
        id: Date.now(), /*Here we have chosen to use the Date.now()method to generate a unique id for our tasks.*/
    };

    addToUI(task);
    addLocalToDo(task);/*add todo to local storage*/
<<<<<<< HEAD
    toDoInput.value = "";
=======
    document.getElementById("task").value = ""; 
>>>>>>> 2220513d296350d650bb581166ed1a568a8a327f
};

function addToUI(task) {
    const toDo = document.getElementById("toDo");
    const toDoDiv = document.getElementById("list");
    const newToDo = document.createElement("li");
    toDoDiv.appendChild(newToDo);  /*here we append the element to whichever element we choose.  In this case, we are choosing to append the newly created list item to our newly created list element*/
    newToDo.innerText = task.name;  /*This is how we will display the text that the user has input for their tasks.  The.name is where we have selected the specific key ('name') of the object ('task')that we would like to display (within our 'newToDo'variable).  We previously were using a similar method, using .value.  The .value inputs the specific text (the "values" as it were) that the user types.*/
    newToDo.classList.add('todo-item');  /**Here we are adding a class to the newly created html element.  This of course, will allow us to style our element. */

    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';/*here we use .innerHTML to add our button element as an icon, using the <i></i> element, and we use the class from the font - awesome cdn which we linked in the head of our html file.  Adding the button as an icon is obviously not critical, just a fun step for some styling.*/
    removeBtn.classList.add('trash-btn');
    removeBtn.addEventListener("click", function () {
        removeBtn.remove(); newToDo.remove();
        removeLocalToDo(task);

    });/*Onclick our button will remove the newToDo from the UI, and from localStorage.*/
    toDoDiv.appendChild(removeBtn);
<<<<<<< HEAD
    /*this will clear the input field for the next task input*/
};

=======
    
};
   
>>>>>>> 2220513d296350d650bb581166ed1a568a8a327f
function addLocalToDo(task) {

    let toDoText;
    if (localStorage.getItem('toDoText') === null) {
        toDoText = [];/*here we check if we already have a todo array, and if not, we will create an empty array*/
    } else {
<<<<<<< HEAD
        toDoText = JSON.parse(localStorage.getItem('toDoText'));    /*and if we DO have a todo array, we will return it as a parsed array*/
    };   
    toDoText.push(task);  /*and we will also push other new todos to local storage*/
    localStorage.setItem('toDoText', JSON.stringify(toDoText));
    
=======
        toDoText = JSON.parse(localStorage.getItem('toDoText'));
    };/*and if we DO have a todo array, we will return it as a parsed array*/
    toDoText.push(task);
    localStorage.setItem('toDoText', JSON.stringify(toDoText));
    /*and we will also push other new todos to local storage*/
>>>>>>> 2220513d296350d650bb581166ed1a568a8a327f
};

function removeLocalToDo(task) {

    let toDoText;
    if (localStorage.getItem('toDoText') !== null) {
        toDoText = JSON.parse(localStorage.getItem('toDoText'));
    };
    const toDoIndex = task.id;/*Creating this variable to be equal to the value we're looking to find, is how we can find the index position and remove it (via the splice() method in the next step)*/
    for (let i = 0; i < toDoText.length; i++) {  /*This for loop and the logic below is how we will iterate through our array to find our value (to be removed in this case)*/
        if (toDoIndex === toDoText[i].id) {
            toDoText.splice(i, 1);
        }
    };
    /*Here we declare what element(s) we want to splice (i), and how many elements (1)*/
    localStorage.setItem('toDoText', JSON.stringify(toDoText));//Here we reset the updated array in localStorage
};
function loadLocalToDo() {  /*This function will obtain the todos from local storage, and use them to populate the UI, and populate the local storage onload.  Code and notes are pasted from above code.*/

    let toDoText;
<<<<<<< HEAD
    if (localStorage.getItem('toDoText') === null) {/*here we check if we already have a todo array, and if not, we will create an empty array*/
        toDoText = [];
        axios.get('https://jsonplaceholder.typicode.com/todos/') /*We then populate our array with the list from JSON Placeholder, using the AXIOS API to make the HTTP call*/
            .then(response => {
                for (let i = 0; i < 5; i++) {
                    toDoText.push(response.data[i].title);
                };
            });
        
        localStorage.setItem('toDoText', JSON.stringify(toDoText));
        /*toDoText.forEach(function (task) {
        addToUI(task);
        })*/
    }
    else {
        toDoText = JSON.parse(localStorage.getItem('toDoText')); /*If it was not null, meaning localStorage did have an array of todos, we populate the UI from that*/
    toDoText.forEach(function (task) {
        addToUI(task);
       })
    };
};
=======
    if (localStorage.getItem('toDoText') === null) {
        toDoText = [];/*here we check if we already have a todo array, and if not, we will create an empty array*/
    } else {
        toDoText = JSON.parse(localStorage.getItem('toDoText'));
    }
    toDoText.forEach(function (task) {
        addToUI(task);
    })
};

>>>>>>> 2220513d296350d650bb581166ed1a568a8a327f
