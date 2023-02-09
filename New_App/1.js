let form = document.querySelector("form");
let text = document.getElementById("txtId");
let todoCon = document.querySelector(".todo-con");

// on form submit,this function will be invoked
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addtodo();
})

// get data from local storage
let todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
    todos.forEach(element => {
        addtodo(element)
    });
}

function addtodo(elem) {
    // To Add ToDo
    let todoColl = document.createElement("div");
    console.log("todoColl", todoColl);
    let todotext = text.value;
    console.log("todotext", todotext);
    if (elem) {
        todotext = elem.text;
    }
    if (todotext) {
        todoColl.innerHTML = `    
    <div id="list-grp" style="display:flex; align-items:center;" class="list-group">
         <div class="check-div ${elem && elem.complete ? "active-check" : ""}"><img src="./images/icon-check.svg" alt=""/></div>
         <p id="myData" class="ptag ${elem && elem.complete ? "complete" : ""}">${todotext}</p>
         <button class="cross" ><img src="./images/icon-cross.svg" alt="" /></button>
    </div>   
    <div class="hr"></div>`
        todoCon.appendChild(todoColl);
        console.log("todoColl", todoColl);
        updateLs()
    }

    // To delete ToDo
    let close = todoColl.querySelector(".cross");
    close.addEventListener("click", () => {
        todoColl.remove();
        updateLs()
    })


    // add image when click on check button
    // add active-check class on check button
    let check = todoColl.querySelector(".check-div");
    check.addEventListener('click', () => {
        check.classList.toggle("active-check")
        console.log(todoColl.children)
        console.log(todoColl.children[0])
        console.log(todoColl.children[0].children[1])
        todoColl.children[0].children[1].classList.add("complete")
        updateLs()
    })
}

// To store in Local Storage sothat data can be stored even after we refresh 
// set data in local storage
function updateLs() {
    let ptag = document.querySelectorAll(".ptag")
    let arr = [];
    ptag.forEach(element => {
        arr.push({
            text: element.innerText,
            complete: element.classList.contains("complete")
        })
    });
    localStorage.setItem("todos", JSON.stringify(arr));
}