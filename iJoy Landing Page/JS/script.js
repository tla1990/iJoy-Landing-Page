const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector ('.menu');
const menuItems = document.querySelector ('.nav-link');
const close = document.querySelector ('.close');

// Drops down navigation menu when hamburger menu is clicked
hamburger.addEventListener('click', function(){
  menu.style.display = 'block';
  hamburger.style.display = 'none';
  close.style.display = 'block';
})

// Closes navigation menu when list item is clicked
menuItems.addEventListener('click', function(){
  close.style.display = 'none';
  menu.style.display = 'none';
  hamburger.style.display = 'block';
})

// Closes navigation menu when close button is clicked
close.addEventListener('click', function(){
  menu.style.display = 'none';
  hamburger.style.display = 'block';
  close.style.display = 'none';
})
