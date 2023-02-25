// great job utilizing querySelector()
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.nav-link');
const close = document.querySelector('.close');

// I changed all the functions to arrow function, it follows best practices for JS(ES6)

// Drops down nav menu when hamburger menu is clicked
hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  hamburger.style.display = 'none';
  close.style.display = 'block';
});

// Closes nav menu when list item is clicked
menuItems.addEventListener('click', () => {
  close.style.display = 'none';
  menu.style.display = 'none';
  hamburger.style.display = 'block';
});

// Closes nav menu when close button is clicked
close.addEventListener('click', () => {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
  close.style.display = 'none';
});

// make sure to put a SEMICOLON (;) after EVERY JS function
