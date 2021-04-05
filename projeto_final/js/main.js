
// 2 - Criando a função que adiciona tarefa
function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    //console.log("Pegrando o Valor");

    if(taskTitle){
        // Clonando o template
           const template = document.querySelector(".template");

        // 2 - clona o template
           const newTask = template.cloneNode(true);
           //console.log(newTask);



        // 3 - Adicionando o titulo
            newTask.querySelector(".task-title").textContent = taskTitle;
            //console.log(newTask);


        // 4 - Remover classes desnecessárias
           newTask.classList.remove("template");
           newTask.classList.remove("hide");


        // 5 - Adicionar tarefa na lista
           const list = document.querySelector("#task-list");
           list.appendChild(newTask);


        // 6 - Evento Remover tarefa
            const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){

             removeTask(this);
        });

        // 7 - Adicionar evento de completar tarefa
            const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){

            completeTask(this);
        })


        // 8 - Limpar o Texto
           document.querySelector("#task-title").value = "";


    }
}

// 6 - Função Eventro de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}


// 7 - Função para completar a tarefa
function completeTask(task){

    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}


// 1 - Adicionando o evento ao botão add-btn
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    //console.log("teste");

    // 2 - Chamando a função addTask
    addTask();

});