const themeBtn = document.getElementById("theme-btn");
const darkTheme = document.querySelectorAll(".dark-theme");
let count = document.getElementById('count')
themeBtn.onclick = () => {
    themeBtn.classList.toggle("sun");
    if (themeBtn.classList.contains("sun")) {
        document.body.classList.add("changeTheme");
        for (const theme of darkTheme) {
            theme.style.backgroundColor = "#ffffff";
            theme.style.color = "#a6a6ad";
        }
    } else {
        document.body.classList.remove("changeTheme");
        for (const theme of darkTheme) {
            theme.style.backgroundColor = "#25273c";
            theme.style.color = "#adafc6";
        }
    }
}

// CRUD FUNCTIONALITY
let arr_todo = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
display_data();

// Add ToDo
function add_todo() {
    document.getElementById("error").innerHTML = "";
    let id = document.getElementById("text").value;
    if (id == "") {
        document.getElementById("error").innerHTML = "Please Enter Value";
    } else {
        arr_todo.push({ todo: id, selected: false });
        localStorage.setItem("todos", JSON.stringify(arr_todo));
        display_data();
    }
}

// display data
function display_data() {
    // get data from local storage
    let todos = JSON.parse(localStorage.getItem("todos"));
    let div_Table = document.getElementById("list-grp");
    let my_Table = `<div class="div_container" style="width:100%;" > `;
    if (todos) {
        todos.forEach((element, i) => {
            console.log(element, i)
            // arr_todo.map((todos, i) => {
            // console.log(todos,i)
            my_Table += `
                <div class="list-group">      
                     <div class="check-div ${element.selected ? "active-check" : ""}" onclick="select_click(${i})"><img src="./images/icon-check.svg" /></div>
                    <p id="myData" class="ptag ${element.selected ? "complete" : ""}">${element.todo}</p>
                    <img src="./images/close.png" class="cross" onclick=delete_click(${i}) />
                </div>
                <div class="hr"></div>`
        }
        );
        my_Table += `</div>`;
        div_Table.innerHTML = my_Table;
        //     });
    }
    { arr_todo.length !== 0 ? count.innerText = `Total: ${arr_todo.length}` : "" }
}

// delete data on delete button click
function delete_click(index) {
    arr_todo.splice(index, 1);
    display_data()
}

// add data on input enter
let input = document.getElementById("text");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        add_todo();
        input.value = "";
    }
});

// // add image when click on check button
// // add active-check class on check button
function select_click(ind) {
    let animation = document.querySelectorAll(".check-div");
    let id = document.querySelectorAll(".ptag");
    animation[ind].classList.toggle("active-check")
    id[ind].classList.toggle("complete")
    if (animation[ind].classList.contains("active-check") && id[ind].classList.contains("complete")) {
        arr_todo[ind].selected = true;
    }
}

// show all todo
function showAll_click() {
    let animation = document.querySelectorAll(".check-div");
    animation.innerHTML = `<img src="./images/icon-check.svg" height="40" />`
    let act = document.getElementById("complete_cont");
    let all = document.getElementById("all");
    let act2 = document.getElementById("active_co");
    all.classList.add("active")
    act.classList.remove("active")
    act2.classList.remove("active")
    display_data();
}

// show todo which are completed
function completed_all() {
    let div_Table = document.getElementById("list-grp");
    let act = document.getElementById("complete_cont");
    let all = document.getElementById("all");
    let act2 = document.getElementById("active_co");
    act.classList.add("active")
    all.classList.remove("active")
    act2.classList.remove("active")
    let completed_arr = arr_todo.filter(item => item.selected === true);
    count.innerText = `Total: ${completed_arr.length}`
    let completed = `<div class="div_container" style="width:100%;" >`;
    arr_todo.map((todos, i) => {
        if (todos.selected) (
            completed += `
            <div class="list-group">   
            <p id="myData" class="ptag ${todos.selected ? "  complete" : ""}">${todos.todo}</p> 
            </div>
            <div class="hr"></div>
            `)
    })
    completed += `</div>`;
    div_Table.innerHTML = completed;
}

// show todo which are active
function active_all() {
    let div_Table = document.getElementById("list-grp");
    let act = document.getElementById("complete_cont");
    let all = document.getElementById("all");
    let act2 = document.getElementById("active_co");
    act.classList.remove("active")
    all.classList.remove("active")
    act2.classList.add("active")

    let active_arr = arr_todo.filter(item => item.selected !== true);
    count.innerText = `Total: ${active_arr.length}`
    let active = `<div class="div_container" style="width:100%;" >`;
    active_arr.map((todos) => (
        active += `
            <div  class="list-group">     
            <p id="myData" class="ptag ${todos.selected ? "complete" : ""}">${todos.todo}</p> 
            </div>
            <div class="hr"></div>
            `)
    )
    active += `</div>`;
    div_Table.innerHTML = active;
}

// clear completed
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    arr_todo = arr_todo.filter(item => item.selected !== true);
    display_data()
})