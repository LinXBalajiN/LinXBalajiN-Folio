/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll sections active link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => { 
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });

    /* sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);
    
    /* remove toggle icon and navbar when click & scroll*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// contact form number
document.getElementById("number").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, '');
});

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .about-content,.experience-box,.services-container, .porfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

 //typed.js specialist-in
 const options = {
    strings: ['PHP/Laravel Web Developer', 'LAMP Stack Specialist', 'PHP Backend Architect'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  };
  
  ['.specialist-in', '.about-me'].forEach(selector => {
    new Typed(selector, options);
  });  