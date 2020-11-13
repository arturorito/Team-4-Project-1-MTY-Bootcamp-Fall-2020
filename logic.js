document.getElementById("buttonstart").onclick = function() {myFunction()};

function myFunction() {
  event.preventDefault();
   var name = prompt("What's your name?");
   alert("Hello " + name);
   localStorage.setItem("user", name);
   location.href = "application.html";

}

function get_localStorage(){
    let name = localStorage.getItem("user");
    document.getElementById("username").innerHTML= name; 
}


