//Toggle icon navbar 
let navIcon = document.getElementById('nav-button');
let navBar = document.getElementById('mobile-nav');
let exitIcon = document.getElementById('exit-nav');
let navItem = document.getElementById('nav-item')

function openNav() {
        navBar.style.right = '0px';
        navIcon.style.display = 'none';
        exitIcon.style.display = 'flex';
}

function exitNav() {
    navBar.style.right= '-100%';
    navIcon.style.display = 'flex';
    exitIcon.style.display = 'none';
}

navIcon.addEventListener('click', openNav);
exitIcon.addEventListener('click',exitNav);
navItem.addEventListener('click', exitNav);

// Change footer Email Icon sub text when touched 

let emailIcon = document.getElementById('email-icon')
let emailTxt = document.getElementById('Gmail');
let emailAddress = document.getElementById('gmail-address');


function showEmail() {
    emailTxt.style.display = 'none';
    emailAddress.style.display = 'block';
    
}

function hideEmail() {
    emailTxt.style.display = 'block';
    emailAddress.style.display = 'none';

}

emailIcon.addEventListener('click', showEmail);
emailAddress.addEventListener('click', hideEmail);



