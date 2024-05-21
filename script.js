const navbar = document.getElementById('sideNav');
const menuBtn = document.getElementById('menu-btn');
navbar.style.right = '-250px';
menuBtn.addEventListener('click', () => {
  if (navbar.style.right === '-250px') {
    navbar.style.right = 0;
  } else {
    navbar.style.right = '-250px';
  }
});
