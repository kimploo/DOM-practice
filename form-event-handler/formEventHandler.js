const formSubmitButton = document.querySelector('#formAction')
formSubmitButton.onsubmit = function (event) {
  event.preventDefault()
  console.dir(event.target)
  console.log(event.target[0].value)
  console.log(event.target[1].value)
  console.log(event.target[2].value)
}

const divSubmitButton = document.querySelector('#divSubmitButton')
divSubmitButton.onclick = function (event) {

  console.dir(event)

  const divName = document.querySelector('#divName');
  const divEmail= document.querySelector('#divEmail');
  const divMessage = document.querySelector('#divMessage');
  console.log(divName.value);
  console.log(divEmail.value);
  console.log(divMessage.value);
}

// const handleDivSubmit = function() {
//   console.log('worked')
// }

// divSubmitButton.addEventListener('click', handleDivSubmit)

// let arr = [1, 2, 3, 4, 5]

// arr.forEach(function(value){
//   console.log(value)
// })