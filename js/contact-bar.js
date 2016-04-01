var myContactBar = document.getElementById('contact-bar');
var myContactNavItem = document.querySelector('[href="#contact"]');

myContactNavItem.addEventListener("click", handler, false);

function handler() {

  if (myContactBar.classList.contains('close')) {

  myContactBar.classList.remove('close');
  myContactBar.classList.add('open');
  }

  else {

    myContactBar.classList.remove('open');
    myContactBar.classList.add('close');
  }
}  
