const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.cancel-icon');
const mobileMenu = document.querySelector('.mobile-menu');

openIcon.addEventListener('click', () => {
  openIcon.style.display = 'none';
  mobileMenu.style.display = 'block';
});
closeIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  openIcon.style.display = 'block';
});