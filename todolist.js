// добавление задачи через форму 
let todoList = [];
if(localStorage.getItem('todo')!=undefined){
  todoList = JSON.parse(localStorage.getItem('todo'));
  showTodoList()
};
function createTask(){
  let taskInput = document.getElementById('taskInput').value;
  let taskTemp = {}; //массив для записи задач
  taskTemp.todo = taskInput;
  taskTemp.check = false;
  let i = todoList.length;
  todoList[i] = taskTemp;
  showTodoList();
  localStorage.setItem('todo', JSON.stringify(todoList));

  };

function showTodoList(){
  let showTodoList = '';
  let clearBtn = document.getElementById('clearId');
  for (let key in todoList){
    if (todoList[key].check==true){
      showTodoList+='<input type="checkbox" id="checkId" checked>';
      
    } else{
      showTodoList+='<input type="checkbox" id="checkId">';
    }
    showTodoList+= todoList[key].todo + '<br>'
  };
  for (let value in todoList){
    if(todoList[value].value!="" && showTodoList !=""){
        clearBtn.removeAttribute('disabled');
    } else{
      clearBtn.setAttribute('disabled', "");
    };
  }
  document.getElementById('outList').innerHTML = showTodoList;
  taskInput.value = "";
  
}

function clearTodo() {
  localStorage.setItem("todo", JSON.stringify([]));
  document.getElementById('outList').innerHTML = "";
  todoList.splice(0, todoList.length);
  
}


