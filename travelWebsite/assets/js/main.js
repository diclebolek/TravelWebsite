// Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      
    //   menu show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
// menu hidden
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMneu = document.getElementById('nav-menu')
    //when we click on each nav__link we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))
// change background header
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
                    //    when the scroll is greater than 50viewport height , add the scroll-header
}
window.addEventListener('scroll',blurHeader)
// show scroll up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll up class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


// scroll section active link
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollY = window.scrollY;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id'),
                    sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }       
    })

}
window.addEventListener('scroll',scrollActive)
// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duraton: 3000,
    delay: 400,
    //reset: true // animations repeat
})
sr.reveal(`.home__data, .explore__data, explore__user, .footer__container`)
sr.reveal(`.home__card` , {delay:600, distance:'100px', interval:100})
sr.reveal(`.about__data, .join__image`, {origin:'right'})
sr.reveal(`.about__image, .join__data`, {origin:'left'})
sr.reveal(`.popular__card`, {interval: 200})
