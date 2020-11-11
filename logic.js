document.getElementById("buttonstart").onclick = function() {myFunction()};

function myFunction() {
  event.preventDefault();
   var name = prompt("What's your name?");
   alert("Hello " + name);
   location.href = "application.html";
}