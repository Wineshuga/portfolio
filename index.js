const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.cancel-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelector('.mobile-nav>li');

const closeMenu = () => {
  mobileMenu.style.display = 'none';
  openIcon.style.display = 'block';
};

openIcon.addEventListener('click', () => {
  openIcon.style.display = 'none';
  mobileMenu.style.display = 'block';
});
closeIcon.addEventListener('click', closeMenu);
mobileLinks.addEventListener('click', closeMenu);



const projectDetails = [
  {
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads;
                    no accounts or sign-ups required. has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    'featured image': './assets//images/mp-img.svg',
    technologies: 'CSS, HTML, Bootscrap, Ruby',
    'link to live version': '#',
    'link to source': '#',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    'featured image': './assets/images/wrk-bg-img.svg',
    technologies: 'HTML, Bootscrap, Ruby',
    'link to live version': '#',
    'link to source': '#',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    'featured image': './assets/images/wrk-bg-img.svg',
    technologies: 'HTML, Bootscrap, Ruby',
    'link to live version': '#',
    'link to source': '#',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    'featured image': './assets/images/wrk-bg-img.svg',
    technologies: 'HTML, Bootscrap, Ruby',
    'link to live version': '#',
    'link to source': '#',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    'featured image': './assets/images/wrk-bg-img.svg',
    technologies: 'HTML, Bootscrap, Ruby',
    'link to live version': '#',
    'link to source': '#',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    'featured image': './assets/images/wrk-bg-img.svg',
    technologies: 'HTML, Bootscrap, Ruby',
    'link to live version': '#',
    'link to source': '#',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    'featured image': './assets/images/wrk-bg-img.svg',
    technologies: 'HTML, Bootscrap, Ruby',
    'link to live version': '#',
    'link to source': '#',
  },
];