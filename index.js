const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.cancel-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelector('.mobile-nav>li');
const popUp = document.querySelector('.popup-section');
const projectSection = document.querySelector('.multi-post');

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
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s with the 
              releax map lapora verita.`,
    img: './assets/images/project-img.svg',
    technologies: ['HTML', 'Bootscrap', 'Ruby'],
    live: 'https://github.com/wineshuga',
    'github link': 'https://github.com/wineshuga',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s with the 
              releax map lapora verita.`,
    img: './assets/images/project-img.svg',
    technologies: ['HTML', 'Bootscrap', 'Ruby'],
    live: 'https://github.com/wineshuga',
    'github link': 'https://github.com/wineshuga',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s with the 
              releax map lapora verita.`,
    img: './assets/images/project-img.svg',
    technologies: ['HTML', 'Bootscrap', 'Ruby'],
    live: 'https://github.com/wineshuga',
    'github link': 'https://github.com/wineshuga',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s with the 
              releax map lapora verita.`,
    img: './assets/images/project-img.svg',
    technologies: ['HTML', 'Bootscrap', 'Ruby'],
    live: 'https://github.com/wineshuga',
    'github link': 'https://github.com/wineshuga',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s with the 
              releax map lapora verita.`,
    img: './assets/images/project-img.svg',
    technologies: ['HTML', 'Bootscrap', 'Ruby'],
    live: 'https://github.com/wineshuga',
    'github link': 'https://github.com/wineshuga',
  },
  {
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. Has been the industry's standard.`,
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it 1960s with the 
              releax map lapora verita.`,
    img: './assets/images/project-img.svg',
    technologies: ['HTML', 'Bootscrap', 'Ruby'],
    live: 'https://github.com/wineshuga',
    'github link': 'https://github.com/wineshuga',
  },
];

const code = document.createElement('div');
code.classList.add('works-section');
const allCodes = projectDetails.map((item) => (
  `<section class="works-item">
    <article>
      <h3 class="heading">${item.name}</h3>
      <p>${item.description}</p>
      <ul class="works-item-list">
        <li>HTML</li>
        <li>Bootscrap</li>
        <li>Ruby</li>
      </ul>
    </article>
    <button type="button" class="works-btn btn">See project</button>
  </section>`
));
code.innerHTML = allCodes.join('');
projectSection.appendChild(code);

const worksBtn = document.querySelectorAll('.works-btn, .mp-btn');
worksBtn.forEach((element, elementIndex) => {
  element.addEventListener('click', () => {
    popUp.style.display = 'block';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
    <img class="close-project" src="./assets/icons/cancel.svg" alt="">
    <h3>${projectDetails[elementIndex].name}</h3>
    <ul>
      <li>HTML</li>
      <li>Bootscrap</li>
      <li>Ruby</li>
    </ul>
    <section>
      <div>
        <img src=${projectDetails[elementIndex].img} alt="An image of the project">
      </div>
      <article>
        <p>${projectDetails[elementIndex].details}</p>
        <div>
          <button class="btn" type="button"><a href='${projectDetails[elementIndex].live}'>See Live</a></button>
          <button class="btn" type="button"><a href='${projectDetails[elementIndex]['github link']}'>See Source</a></button>
        </div>
      </article>
    </section>
    `;
    popUp.appendChild(modal);
  });
});

const closeProject = document.querySelector('.close-project');
closeProject.addEventListener('click', () => {
  popUp.style.display = 'none';
});