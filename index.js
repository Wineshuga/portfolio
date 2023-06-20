const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.cancel-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelector('.mobile-nav>li');
const projectSection = document.querySelector('.posts');

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
projectSection.innerHTML = `
      <section class="works-section">
        <section class="works-item">
          <article>
            <h3 class="heading">Professional Art Printing Data</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.
            </p>
            <ul class="works-item-list">
              <li>HTML</li>
              <li>Bootscrap</li>
              <li>Ruby</li>
            </ul>
          </article>
          <button type="button" class="works-btn btn">See project</button>
        </section>

        <section class="works-item">
          <article>
            <h3 class="heading">Professional Art Printing Data</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.
            </p>
            <ul class="works-item-list">
              <li>HTML</li>
              <li>Bootscrap</li>
              <li>Ruby</li>
            </ul>
          </article>
          <button type="button" class="works-btn btn">See project</button>
        </section>

        <section class="works-item">
          <article>
            <h3 class="heading">Professional Art Printing Data</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.
            </p>
            <ul class="works-item-list">
              <li>HTML</li>
              <li>Bootscrap</li>
              <li>Ruby</li>
            </ul>
          </article>
          <button type="button" class="works-btn btn">See project</button>
        </section>

        <section class="works-item">
          <article>
            <h3 class="heading">Professional Art Printing Data</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.
            </p>
            <ul class="works-item-list">
              <li>HTML</li>
              <li>Bootscrap</li>
              <li>Ruby</li>
            </ul>
          </article>
          <button type="button" class="works-btn btn">See project</button>
        </section>
        <section class="works-item">
          <article>
            <h3 class="heading">Professional Art Printing Data</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.
            </p>
            <ul class="works-item-list">
              <li>HTML</li>
              <li>Bootscrap</li>
              <li>Ruby</li>
            </ul>
          </article>
          <button type="button" class="works-btn btn">See project</button>
        </section>

        <section class="works-item">
          <article>
            <h3 class="heading">Professional Art Printing Data</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.
            </p>
            <ul class="works-item-list">
              <li>HTML</li>
              <li>Bootscrap</li>
              <li>Ruby</li>
            </ul>
          </article>
          <button type="button" class="works-btn btn">See project</button>
        </section>
`;