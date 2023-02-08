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
let arr_ids = [];

function add_click() {
    document.getElementById("error").innerHTML = "";
    let id = document.getElementById("txtId").value;
    if (id == "") {
        document.getElementById("error").innerHTML = "Please Enter Value";
    } else {
        arr_ids.push(id);
        display_data();
    }
}

function showAll_click() {
    display_data();
}

{/* <div class="check-div" onclick="select_click()"><img src="./images/icon-check.svg"  /></div> */ }
function display_data() {
    let div_Table = document.getElementById("list-grp");
    let my_Table = `<div style="width:100%;">
    `;
    for (let i = 0; i < arr_ids.length; i++) {
        my_Table += `
        <div style="display:flex; align-items:center;" class="list-group" >      
            <div class="check-div"><img src="./images/icon-check.svg" /></div>
            <p id="myData">${arr_ids[i]}</p>
            <img src="./images/icon-cross.svg" class="cross" onclick="delete_click()"/>
        </div>
        <div class="hr"></div>
        `;
    }
    my_Table += `</div>`;
    div_Table.innerHTML = my_Table;
}


function select_click() {
}

function delete_click() {
    let id = document.getElementById("myData").innerText;
    i = arr_ids.indexOf(id);
    if (i == -1) {
        alert("id not found");
    } else {
        arr_ids.splice(i, 1);
        display_data();
    }
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