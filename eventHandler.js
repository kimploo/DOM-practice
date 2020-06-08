let menus = document.querySelectorAll('button'); //모든 버튼을 가져옵니다.

let btnAmericano = menus[0];
let btnCaffelatte = menus[1];

btnAmericano.onclick = handleClick;
btnCaffelatte.onclick = handleClick; // 이상으로 for 문으로 충분히 구현할 수 있는 내용입니다.
btnCaffelatte.id = "btn-latte";

function handleClick(event) {
  console.log(event.target)

  let currentMenu; //TODO
  console.log(currentMenu + '를 클릭하셨습니다.');
}