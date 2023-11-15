// Get the button and the paragraph elements
var myButton = document.getElementById('myButton');
var secondPara = document.getElementById('secondPara');

// Add an event listener to the button
myButton.addEventListener('click', function() {
  // Fetch a random joke
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      // Set the text of the paragraph to the joke
      secondPara.innerText = data.setup + ' ' + data.punchline;
    });
});

document.querySelector('.nav-toggle-label').addEventListener('click', function() {
  document.getElementById('nav-toggle').checked = !document.getElementById('nav-toggle').checked;
});