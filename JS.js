let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('act22');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('act22');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('act22');
  menu.classList.remove('fa-times');
  navbar.classList.remove('act22');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('act22');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('act22');
}