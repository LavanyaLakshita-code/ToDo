const themeBtn = document.getElementById("theme-btn");
const darkTheme = document.querySelectorAll(".dark-theme");

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
let arr_todo = [];

function add_click() {
    document.getElementById("error").innerHTML = "";
    let id = document.getElementById("txtId").value;
    if (id == "") {
        document.getElementById("error").innerHTML = "Please Enter Value";
    } else {
        arr_todo.push({ todo: id, selected: false });
        display_data();
    }
    console.log(arr_todo, 'todo array')
}
console.log(arr_todo, 'todo array')
function display_data() {
    let div_Table = document.getElementById("list-grp");
    let my_Table = `<div class="div_container" style="width:100%;" >
    `;
    // for (let i = 0; i < arr_todo.length; i++) {
    arr_todo.map((todos, i) => (
        my_Table += `
            <div  class="list-group" style="display:flex; align-items:center;" >      
                <div class="check-div" onclick="select_click(${i})"><img src="./images/icon-check.svg" /></div>
                <p id="myData" class="ptag">${todos.todo}</p>
                <img src="./images/close.png" class="cross" onclick=delete_click(${i}) />
            </div>
            <div class="hr"></div>
            `
    ));
    // }
    my_Table += `</div>`;
    div_Table.innerHTML = my_Table;
}

// delete data on delete button click
function delete_click(index) {
    console.log(index, 'del click')
    // console.log(id[index].innerHTML);
    let id = document.querySelectorAll(".ptag");
    let pid = id[index].innerHTML;
}

// add data on input enter
let input = document.getElementById("txtId");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        add_click();
        input.value = "";
    }
});

// // add image when click on check button
// // add active-check class on check button
function select_click(ind) {
    let id = document.querySelectorAll(".ptag");
    id[ind].classList.add("complete");
}

// show all todo
function showAll_click() {
    display_data();
}

// show todo which are completed
function completed_all() {
    let id = document.querySelectorAll(".ptag");
    for (let i = 0; i <= id.length; i++) {
        if (id[i].classList.contains("complete")) {
            id[i].style.display = "flex";
        } else {
            id[i].style.display = "none";
        }
    }
}

// show todo which are active
function active_all() {
    let id = document.querySelectorAll(".ptag");
    for (let i = 0; i <= id.length; i++) {
        if (!id[i].classList.contains("complete")) {
            id[i].style.display = "flex";
        } else {
            id[i].style.display = "none";
        }
    }
    // let id = document.getElementById("list-grp")
    // console.log(id.children[0].children);
}

function completed_all() {

}

