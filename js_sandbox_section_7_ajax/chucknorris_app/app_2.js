// UI vars 
const button = document.querySelector('.get-jokes');

button.addEventListener('click', getJokes);

function getJokes(e){
  const number = document.getElementById('number').value;
  
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.send();

  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success'){
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`; 
        })
      } else {
        return `<li>Something went wrong</li>`;
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  e.preventDefault();
}