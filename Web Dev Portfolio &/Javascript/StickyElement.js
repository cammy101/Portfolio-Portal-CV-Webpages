window.onscroll = function() {stickFunction()};

var navbar = document.getElementsByClassName("navbar")[0];
var sticky = navbar.offsetTop;

function stickFunction() 
{
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky")
  } 
  else 
  {
    navbar.classList.remove("sticky");
  }
}