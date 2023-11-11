let myJoke = document.createElement('button');

myJoke.innerHTML = 'Generate Joke';

document.body.appendChild(myJoke);

myJoke.addEventListener('click', function() {
    fetch('https://v2.jokeapi.dev/joke/Girl')
      .then(response => response.json())
      .then(data => {
        if (data.type === 'single') {
          alert(data.joke);
        } else if (data.type === 'twopart') {
          alert(data.setup + ' ' + data.delivery);
        }
      });
  });