const header = document.querySelector('header');
const h4 = document.querySelector('header h4');
const link = document.querySelector('a.nav-link');
const link2 = document.getElementById('link');

function stickyNav() {
  header.classList.toggle('scrolled', window.scrollY > 540);
  h4.classList.toggle('scrolled', window.scrollY > 540);
  link.classList.toggle('scrolled', window.scrollY > 540);
  link2.classList.toggle('scrolled', window.scrollY > 540);
}

window.addEventListener('scroll', stickyNav);

// ----------- Show Scroll-Up -----------

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  scrollY >= 440
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

// ----------- Carousel-Slider -----------

let slideIndex = 1;

function nextSlide(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slides');
  let dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' activeDot', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' activeDot';
}

showSlides(slideIndex);

// ----------- Tabs -----------

const tabs = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

tabs.forEach((tab, x) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    content.forEach((x) => {
      x.classList.remove('active');
    });
    content[x].classList.add('active');
  });
});

function change() {
  document.getElementById('team').style.backgroundImage =
    'url(assets/img/3.png)';
}

function changeback() {
  document.getElementById('team').style.backgroundImage =
    'url(assets/img/4.png)';
}

const accBox = document.querySelectorAll('.acc-box');

accBox.forEach((box) => {
  box.addEventListener('click', () => {
    accBox.forEach((x) => {
      x.classList.remove('active');
    });
    box.classList.add('active');
  });
});

/* for (i = 0; i < accBox.length; i++) {
  accBox[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
} */
