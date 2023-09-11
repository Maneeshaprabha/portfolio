/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar')
      navToggl = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */

const navItems = document.querySelectorAll('.nav__item');

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove the 'show-sidebar' class when a navigation item is clicked
        navMenu.classList.remove('show-sidebar');
    });
});

// Add event listener to open the sidebar
if (navToggl) {
    navToggl.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar');
    });
}

// Add event listener to close the sidebar
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar');
    });
}

// ..........................scroll buton ............................

const toTop = document.querySelector(".to__top");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset>100){
        toTop.classList.add("active");

    }else{
        toTop.classList.remove("active");
    }
})

// ..........................scroll buton ............................


/*=============== SKILLS TABS ===============*/
const tabs= document.querySelectorAll('[data-target]'),
           tabContent=document.querySelectorAll('[data-content]')

           tabs.forEach(tab=>{
            tab.addEventListener("click", ()=> {
                const target = document.querySelector(tab.dataset.target)

                tabContent.forEach(tabContents=> {
                    tabContents.classList.remove('skills__active')
                })
                target.classList.add('skills__active')

                tabs.forEach(tab=> {
                    tab.classList.remove('skills__active')
                })
                tab.classList.add('skills__active')
            })
            
           })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
   selectors:{
    target: '.work__card'
   },
   animation:{
     duration:300
   }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(i=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

// linkWork.forEach(i=> l.addEventListener("click" , activeWork))


/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains('work__button')) {
      togglePortfolioPopup();
      portfolioItemDetails(e.target.parentElement);
  
      // Add the active-demo class to the clicked button
   
    }
  });
  
  function togglePortfolioPopup() {
    document.querySelector('.portfolio__popup').classList.toggle('open');
  }
  
  document.querySelector('.portfolio__popup-close').addEventListener("click", togglePortfolioPopup);
  
  function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src;
    document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML;
  }

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}      

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});


modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener("click", ()=> {
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
         
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        
      },
});
/*=============== INPUT ANIMATION ===============*/


const inputs= document.querySelectorAll(".input");

function focusFuc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFuc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove(focus);
    }
}

inputs.forEach((input)=>{
    input.addEventListener("focus", focusFuc);
    input.addEventListener("blur",blurFuc)
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.add("active-link");
        } else {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.remove("active-link");
        }
    });
}

/*=============== SHOW SCROLL UP ===============*/



/*.....................typed.................................*/


var typed = new Typed(".footer__subtitle", {
    strings: ["Web Designer", "Software Engineer", "Youtuber" , "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});