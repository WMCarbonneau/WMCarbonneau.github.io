// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get page links in modal
var links = document.getElementsByClassName("pageLink");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function handleClick() {
    modal.style.display = "none";
  });
}

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  modal.style.zIndex =  9998;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
