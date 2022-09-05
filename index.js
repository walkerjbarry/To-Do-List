/*NOTES (ALSO NOTES AT BOTTOM)
COMPONENTS NEEDED:
items saved as objects,
with a key (toDo text)
and ID key
which is a random number

To get text from input field>>>.getElementById >>> use a variable to add the text to the list ( <p id="currentList"> )
-------------------------------------

COMPONENTS NEEDED:
items saved as objects,
with a key (toDo text)
and ID key
which is a random number

*/
/*First, we get our elements and create the corresponding variables.*/

const list = document.getElementById('list');
const toDo = document.getElementById('toDo');
const taskInput = list['task'];


//here we create (what wil be) our array for the tasks we will input//

const tasks = [];

const addToDo = (task, date)=>{};
  
/* Upon input, task objects will look like this:

{
task: "",
date: day/month/year
}

Here we will add each new task as an item <li></li> to our list <ul></ul>
*/

const addTaskLi = (task , date)=>{
  const addLi = document.createElement('li');
  addLi.innerText = "task", "date";
}
https://www.youtube.com/watch?v=Ttf3CEsEwMQ
