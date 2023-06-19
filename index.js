const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.cancel-icon');
const mobileMenu = document.querySelector('.mobile-menu');

const closeMenu = () => {
  mobileMenu.style.display = 'none';
  openIcon.style.display = 'block';
};

openIcon.addEventListener('click', () => {
  openIcon.style.display = 'none';
  mobileMenu.style.display = 'block';
});
closeIcon.addEventListener('click', closeMenu);