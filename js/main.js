var parent = document.querySelector("ul");
var myNavitems = document.querySelectorAll('li a');

parent.addEventListener("click", handler, false);

function handler(e) {

  if (e.target !== e.currentTarget) {

    for(i = 0; i < myNavitems.length; i++) {
      myNavitems[i].classList.remove('active');
    }

    e.target.classList.add('active');
   }

  e.stopPropagation();
}

var myContactBar = document.getElementById('contact-bar');
var myContactNavItem = document.querySelector('[href="#contact"]');

myContactNavItem.addEventListener("click", handler, false);

function handler() {

  if (myContactBar.classList.contains('close')) {

  myContactBar.classList.add('open');
  myContactBar.classList.remove('close');
  }

  else {

  myContactBar.classList.remove('open');
  myContactBar.classList.add('close');
   }
}
