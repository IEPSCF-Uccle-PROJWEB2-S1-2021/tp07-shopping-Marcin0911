// Écrivez votre code JavaScript ici.
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

const items = () => {

  let li = document.createElement("li");
  let span = document.createElement("span");
  let btn1 = document.createElement("button");
  span = (document.createTextNode(input.value));
  li.appendChild(span);
  li.appendChild(btn1);
  btn1.onclick = function() {
    ul.removeChild(li);
  };
  btn1 = (btn1.innerHTML = "Delete");
  ul.appendChild(li);
  input.value = "";
  input.focus();

}

btn.addEventListener("click", items);

