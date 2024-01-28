//Toggle icon navbar
let navIcon = document.getElementById("nav-button");
let navBar = document.getElementById("mobile-nav");
let exitIcon = document.getElementById("exit-nav");
let navItem = document.getElementById("nav-item");

function openNav() {
  navBar.style.right = "0px";
  navIcon.style.display = "none";
  exitIcon.style.display = "flex";
}

function exitNav() {
  navBar.style.right = "-100%";
  navIcon.style.display = "flex";
  exitIcon.style.display = "none";
}

navIcon.addEventListener("click", openNav);
exitIcon.addEventListener("click", exitNav);
navItem.addEventListener("click", exitNav);

// Change footer Email Icon sub text when touched

let emailIcon = document.getElementById("email-icon");
let emailTxt = document.getElementById("Gmail");
let emailAddress = document.getElementById("gmail-address");

function toggleEmail() {
        emailTxt.style.opacity= '0%';
        document.getElementById('Gmail').innerHTML = "sean.mckay.web.dev@gmail.com";
        emailTxt.style.opacity= '100%';

    
}
emailIcon.addEventListener('click', toggleEmail);

// Appear on Scroll in About  //

const faders = document.querySelectorAll(".fade-in"); 
const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});