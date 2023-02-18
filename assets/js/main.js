// ===========  Show Menu  =========== //
const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
        toggle = document.getElementById(toggleId);

    if (nav && toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show_menu')
        })
    }
}

showMenu('nav-menu', 'nav-toggle');

// ===========  Remove Menu Mobile =========== //
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const nav = document.getElementById('nav-menu');

    nav.classList.remove('show_menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction))

// ===========  SCROLL SECTION ACTIVE LINK  =========== //

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');

        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);

// ========= CHANGE BACKGROUND HEADER ========== //
const scrollHeader = () => {

    const header = document.getElementById('header');
    
    if(this.scrollY >= 80 ) header.classList.add('scroll-header'); else header.classList.remove('scroll-header') 

}

window.addEventListener('scroll', scrollHeader);

// ====== SHOW SCROLL UP ========== //
const showScrollup = ()=>{

    const scrollup = document.getElementById('scrollUp');
    if(this.scrollY >= 400) scrollup.classList.add('show-scroll') ; else scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', showScrollup);

// ====== DARK LIHGT THEME ========== //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' :'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-toggle-right' ? 'add' : 'remove'](iconTheme)
}

const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'bx-toggle-right' : 'bx-toggle-left';
const getCurrentTheme  = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light';


themeButton.addEventListener('click', ()=>{
    themeButton.classList.toggle(iconTheme);
    document.body.classList.toggle(darkTheme);



    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());
});