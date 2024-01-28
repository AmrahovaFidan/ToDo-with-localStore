let addInput = document.querySelector("#addInput");
let todoList = document.querySelector("#todoList");
let normal = document.querySelector(".normal");
let data = [];

// let localStordaki = JSON.parse(localStorage.getItem("data")) ?? [];

addInput.addEventListener("keydown", function (e) {
    addInput.classList.add("active");
    const inputKey = e.key;

    if (inputKey == "Enter") {
        if (this.value == " ") {
            alert("Zehmet olmasa Inputu doldurun!");
        }
        else {
            data.push(this.value);
            this.value = " ";
            renderTodo(data);
            console.log(data);
        }
        saveData();
    }
});

function renderTodo(p1) {
    const newData = p1.map((item) => {
        return `<li class="normal">${item}<span></span></li>`
    }).join("");
    todoList.innerHTML = newData;

};

todoList.addEventListener("click", function (e) {
    // console.log(e.target.tagName); 
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});





function saveData() {
    localStorage.setItem("data", todoList.innerHTML);
};

function showTask() {
    todoList.innerHTML = localStorage.getItem("data");
};

showTask();

