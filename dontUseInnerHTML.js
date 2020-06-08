let btn = document.querySelector('#hackedButton');
let input = document.querySelector('#hackedInput');
let root = document.querySelector('#root');

btn.onclick = function(){
  root.innerHTML = input.value;
}