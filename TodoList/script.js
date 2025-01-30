const mainTodoElem = document.querySelector(".todo-list-elem");
    const inputValue = document.getElementById("inputValues");
    
    // let localTodoLists = [];
    
    const getTodoListFromLocal = () =>{
        return JSON.parse(localStorage.getItem("youtubeTodoList"));
    };

    const addTodoListLocalStorage = (localTodoLists) => {
        return localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoLists));
    }

    let localTodoLists = getTodoListFromLocal() || [];
    
    const addTodoDynamicElement = (curElem) => {
        const divElement = document.createElement("div");
        divElement.classList.add("main_todo_div"); 
        divElement.innerHTML = `<li>${curElem}</li> <button class="deleteBtn">Delete</button>`;
        mainTodoElem.append(divElement);
        };

   