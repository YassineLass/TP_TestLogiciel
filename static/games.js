'use strict';
//console.log(guess);


const http = new XMLHttpRequest();





let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

console.log(secretNumber);
//edge case-> if user entered nothing
// exclamation means negation
//exclamation makes true to false
//exclamation makes false to true
//guess has null value->guess will be true
//LOGIC
function displayMessage(msg){
  document.querySelector('.message').textContent = msg;
}
//1 i need to select check button -> document.query('.check')
//2. i need to play the game when it is clicked 
document.querySelector('.again').addEventListener('click', function() {
  const url = 'http://127.0.0.1:5000/new'
  http.open('GET',url)
  http.send();
  http.onload = function() {
  if (http.status != 200) { // analyze HTTP status of the response
    alert(`Error ${http.status}: ${http.statusText}`); // e.g. 404: Not Found
   } else { // show the result
    alert(`${http.responseText} `); // response is the server response
    
  }
  };	
  ;
  console.log('sent');
  score = 50;
  document.querySelector('.score').textContent=50;
  document.querySelector('.highscore').textContent=0;
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
    displayMessage('Start playing');
    secretNumber = Math.trunc(Math.random() * 50) + 1;
});





document.querySelector('.check').addEventListener('click', function() {
	console.log('TEST');
	

	  const guess = document.querySelector('.guess').value;
	  
  if(guess < 1 || guess > 50)
  {
    displayMessage('Invalid Input');
  }
  else {
  	console.log(guess);
	 let data = JSON.parse('{}');
	  data['number']=guess;
	  let url2 = 'http://127.0.0.1:5000/check'
	http.open("POST",url2)
	http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	http.onload = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
    if(JSON.parse(http.responseText)["result"] == "YES")	
    	{displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#34CC17';

      if(score > highscore) 
      {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }}
     else {
     if(score > 1)
      {
      	if(JSON.parse(http.responseText)["result"] == "INF")
      	displayMessage("Too Low!");
      	else
      	displayMessage("Too High!");
       score--;
       document.querySelector('.score').textContent = score;
      }
      else 
      {
       displayMessage('You lost the game!');
       document.querySelector('.score').textContent=0;
      }
    }


 
 
  }
}
http.send(JSON.stringify(data));
}

}
);

//LOGIC 3 - CHECK FOR SCORE HIGHSCORE
// i want my score to decrease if my number is wrong
//
// LOGIC 4 -  DISPLAY RELEVANT MSGS




