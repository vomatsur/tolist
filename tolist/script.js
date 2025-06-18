

const body = document.getElementsByTagName("body")[0];
const sendBtn = document.getElementById("send-btn");
const darkBtn = document.getElementById("dark");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const input = document.getElementById("input");
const check = document.getElementById("check");
const editBtn = document.getElementById("edit-btn");
const deleteBtn = document.getElementById("delete-btn");
const ul = document.getElementById("ul");
let h2 = document.querySelector('h2')


darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  h2.classList.toggle('h22')
  ul.classList.toggle('ul22')
  if (moon.style.display == "none") {
    sun.style.display = "none";
    moon.style.display = "block";
  
  } else {
    sun.style.display = "block";
    moon.style.display = "none";
   
  }
});

function addTodo(yozuv) {
  if (yozuv.trim().length < 1) {
    alert("Biror narsa yoz!!!!!!");
    input.value = "";
  } else {
    const li = document.createElement("li");
    li.innerHTML = `${yozuv} `;

    ul.appendChild(li);
    input.value = "";
  }
}

sendBtn.addEventListener("click", () => {

  addTodo(input.value);
});

function chizish(a) {
  const h2 = a.parentNode.children[1];
  if (a.checked == true) {
    h2.style = "text-decoration:line-through";
  } else {
    h2.style = "text-decoration:none";
  }
}

function editTodo(e) {
  input.value = e.parentNode.parentNode.children[0].children[1].textContent;
  ul.removeChild(e.parentNode.parentNode);
}

function deleteTodo(d) {
  ul.removeChild(d.parentNode.parentNode);
}

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addTodo(input.value);
    
  }
});