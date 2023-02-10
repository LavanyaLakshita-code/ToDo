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
    // console.log("todoColl", todoColl);
    todoColl.classList.add("todocoll");
    let todotext = text.value;
    // console.log("todotext", todotext);
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
        // console.log("todoColl", todoColl);
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
        // console.log(todoColl.children)
        // console.log(todoColl.children[0])
        // console.log(todoColl.children[0].children[1])
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

// when we click on active,we can only see todo which are active(not completed)
// and when click on completed, we can see todo which are completed

// let info = document.querySelectorAll(".info p")
// console.log(info);
let info = document.querySelectorAll(".active-cont p")
// console.log(info);

let todoli = document.querySelectorAll(".todocoll")
// console.log(todoli);
info.forEach(element => {
    // console.log(element, "element");
    element.addEventListener("click", () => {
        info.forEach(item => {
            item.classList.remove("active");
        });
        element.classList.add("active")

        if (element.innerText == "Active") {
            todoli.forEach(ele => {
                // console.log("ele", ele.children);
                // console.log("ele2", ele.children[0]);
                // console.log("ele3", ele.children[0].children[1]);
                if (!ele.children[0].children[1].classList.contains("complete")) {
                    ele.style.display = "block";
                } else {
                    ele.style.display = "none";
                }
            })
        } else if (element.innerText == "Completed") {
            todoli.forEach(ele => {
                if (ele.children[0].children[1].classList.contains("complete")) {
                    ele.style.display = "block";
                } else {
                    ele.style.display = "none";
                }
            })
        } else {
            todoli.forEach(ele => {
                ele.style.display = "block";
            })
        }
    })
})

// clear all completed todo when click on clear todo

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    todoli.forEach(elem => {
        // console.log("elem", elem);
        if (elem.children[0].children[1].classList.contains("complete")) {
            elem.remove()
            updateLs();
        }
    });
})
