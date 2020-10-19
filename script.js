// Écrivez votre code JavaScript ici.
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

const items = () => {

  let li = document.createElement("li");
  let span = document.createElement("span");
  let btn1 = document.createElement("button");
  span = (document.createTextNode(input.value));
  li.appendChild(span);
  btn1.onclick = function() {
    ul.removeChild(li);
  };
  li.appendChild(btn1);
  btn1 = (btn1.innerHTML = "Delete");
  ul.appendChild(li);
  input.value = "";
  input.focus();

}

btn.addEventListener("click", items);

