<<<<<<< HEAD
const input_box = document.getElementById("text_box")
const list_container = document.getElementById("task_items")

function add_task(){
    if(input_box.value === ""){
        alert("Add a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "🗑️";
        li.appendChild(span);
    }
    input_box.value="";
    saveData();
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", list_container.innerHTML);
}
function showTask(){
    list_container.innerHTML = localStorage.getItem("data");
}
=======
const input_box = document.getElementById("text_box")
const list_container = document.getElementById("task_items")

function add_task(){
    if(input_box.value === ""){
        alert("Add a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "🗑️";
        li.appendChild(span);
    }
    input_box.value="";
    saveData();
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", list_container.innerHTML);
}
function showTask(){
    list_container.innerHTML = localStorage.getItem("data");
}
>>>>>>> 73bb4ae ( CSS changes)
showTask();