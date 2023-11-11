let myButton = document.createElement('button');
myButton.innerHTML = 'Generate Quote';
document.body.appendChild(myButton);

myButton.addEventListener('click', function() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      alert(data.content + " - " + data.author);
    });
});