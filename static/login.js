var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

const http = new XMLHttpRequest();
const url ='http://127.0.0.1:5000/login'

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
let data = JSON.parse('{}');
data["username"]=username;
data["password"]=password;

console.log(data);

http.open("POST",url);
http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
http.onload = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
    if(http.responseText == "registered")	
    	{window.glob = "username";
       window.location.href = 'http://127.0.0.1:5000/game?username='+username;}
     else {
     alert(this.responseText);
     } 
    }
}
http.send(JSON.stringify(data))
 


}
