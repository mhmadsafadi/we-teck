const btnMenu = document.getElementById('menu-btn')
const mobileNnv = document.getElementById('menu')
const navbar = document.getElementById('navbar')

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('open');
    mobileNnv.classList.toggle('flex');
    mobileNnv.classList.toggle('hidden');
})


const ScrollNavbar = () => {
  const scroll = document.documentElement.scrollTop
  if (scroll > 150) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg")
  }
}
window.addEventListener('scroll', ScrollNavbar)



const serviceSwiper = new Swiper(".serviceSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
});


const customersSwiper = new Swiper(".customersSwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".next-arrow",
    prevEl: ".prev-arrow",
  }
});



/*   Animation on Scroll   */

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});