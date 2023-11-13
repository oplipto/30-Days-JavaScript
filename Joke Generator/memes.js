var myButton = document.getElementById('myButton');
var memeImage = document.getElementById('memeImage');

myButton.addEventListener('click', function() {
  fetch('https://www.reddit.com/r/dankmemes/top/.json?sort=top&t=day&limit=100')
    .then(response => response.json())
    .then(data => {
      var randomIndex = Math.floor(Math.random() * data.data.children.length);
      memeImage.src = data.data.children[randomIndex].data.url;
    });
});