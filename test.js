// let form = document.querySelector("form");
// let text = document.getElementById("text");
// let todoCon = document.querySelector(".todo-con");

// // on form submit,this function will be invoked
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     addtodo();
// })

// // get data from local storage
// let todos = JSON.parse(localStorage.getItem("todos"));
// if (todos) {
//     todos.forEach(element => {
//         addtodo(element)
//     });
// }

// function addtodo(elem) {
//     // To add 
//     let todoColl = document.createElement("div");
//     todoColl.classList.add("todocoll");
//     // console.log("todoColl", todoColl);
//     let todotext = text.value;
//     // console.log("todotext", todotext);
//     if (elem) {
//         todotext = elem.text;
//     }
//     if (todotext) {
//         todoColl.innerHTML = `      
//         <div class="todo-li">
//             <div class="check ${elem && elem.complete ? "active-check" : ""}"><img src="./images/icon-check.svg" alt=""/></div>
//                 <p class="ptag ${elem && elem.complete ? "complete" : ""}">${todotext}</p>
//                 <button class="close"><img src="./images/icon-cross.svg" alt="" /></button>
//             </div>
//         <div class="hr"></div>`
//         todoCon.appendChild(todoColl);
//         // console.log("todoColl", todoColl);
//         updateLs()
//     }

//     // To delete
//     let close = todoColl.querySelector(".close");
//     close.addEventListener("click", () => {
//         todoColl.remove();
//         updateLs()
//     })

//     // add image when click on check buttons
//     // add active-check class on check button
//     let check = todoColl.querySelector(".check");
//     check.addEventListener('click', () => {
//         // check.classList.toggle("active-check")
//         // console.log(todoColl.children)
//         // console.log(todoColl.children[0])
//         // console.log(todoColl.children[0].children[1])
//         todoColl.children[0].children[1].classList.add("complete")
//         updateLs()
//     })
// }


// // To store in Local Storage sothat data can be stored even after we refresh 
// // set data in local storage
// function updateLs() {
//     let ptag = document.querySelectorAll(".ptag")
//     let arr = [];
//     ptag.forEach(element => {
//         arr.push({
//             text: element.innerText,
//             complete: element.classList.contains("complete")
//         })
//     });
//     localStorage.setItem("todos", JSON.stringify(arr));
// }

// // when we click on active,we can only see todo which are active(not completed)
// // and when click on completed, we can see todo which are completed

// // let info = document.querySelectorAll(".info p")
// // console.log(info);
// let info = document.querySelectorAll(".choice p")
// // console.log(info);

// let todoli = document.querySelectorAll(".todocoll")
// info.forEach(element => {
//     console.log(element);
//     element.addEventListener("click", () => {
//         info.forEach(item => {
//             item.classList.remove("active");
//         });
//         element.classList.add("active")
//         if (element.innerText == "Active") {
//             todoli.forEach(ele => {
//                 if (!ele.children[0].children[1].classList.contains("complete")) {
//                     ele.style.display = "block";
//                 } else {
//                     ele.style.display = "none";
//                 }
//             })
//         } else if (element.innerText == "Completed") {
//             todoli.forEach(ele => {
//                 if (ele.children[0].children[1].classList.contains("complete")) {
//                     ele.style.display = "block";
//                 } else {
//                     ele.style.display = "none";
//                 }
//             })
//         } else {
//             todoli.forEach(ele => {
//                 ele.style.display = "block";
//             })
//         }
//     })
// })


// // clear all completed todo when click on clear todo

// let clear = document.querySelector(".clear");
// clear.addEventListener("click", () => {
//     todoli.forEach(elem => {
//         if (elem.children[0].children[1].classList.contains("complete")) {
//             elem.remove()
//             updateLs();
//         }
//     });
// })

// // let left = document.querySelector(".left");
// // function setitem() {
// //     let activeTodo = document.querySelectorAll(".todo-li .active-check");
// //     let diff = todoli.length - activeTodo.length;
// //     left.innerText = `${diff} items left`

// // }
// // setitem();