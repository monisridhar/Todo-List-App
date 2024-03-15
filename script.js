function addTodo(){
    var todoInput=document.getElementById("todo-input").value;

    if(todoInput!==""){
        var li=document.createElement("li");
        li.textContent=todoInput;
    }

    document.getElementById("todo-list").appendChild(li);

    var deletButton=document.createElement("button");
    deletButton.textContent="Delete";
    deletButton.classList.add("delete-btn");
    deletButton.onclick=function(){
        li.remove();
    };

    li.appendChild(deletButton);
}