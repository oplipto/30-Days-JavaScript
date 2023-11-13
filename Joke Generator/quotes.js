var myButton = document.getElementById('myButton');
var secondPara = document.getElementById('secondPara');

myButton.addEventListener('click', function() {

  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      
      secondPara.innerText = `${data.content} —${data.author}`;
    });
});