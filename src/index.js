
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const output = document.getElementById('output');
let searchParams = new URLSearchParams(window.location.search);
output.innerHTML = searchParams.get('username') ? `Welcome, <br />${searchParams.get("username")}!!` : 'Welcome!!';
const username = document.getElementById('username');


document.getElementById('btnLogin').addEventListener('click', () => {
  if ('URLSearchParams' in window) {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set("username", username.value);
    window.location.search = searchParams.toString();
  }

  modal.style.display = "none";
  output.value = 'Hello ' + username.value + '!';
  output.value = searchParams.get("username");
})