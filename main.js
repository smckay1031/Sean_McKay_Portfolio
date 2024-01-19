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




