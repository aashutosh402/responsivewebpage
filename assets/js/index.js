
// ====== TOGGLE MENU======
const navMenu = document.getElementById("nav-menu")
const toggleMenu  = document.getElementById("navtoggl")
const closeMenu = document.getElementById("nav-close")


// SHOW
toggleMenu.addEventListener("click",()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener("click",()=>{
    navMenu.classList.remove("show")
})


// ======== Home Image Reactive ========

document.addEventListener('mousemove',move)

function move(e){
    this.querySelectorAll('.move').forEach(layer=>{
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/90
        const y = (window.innerHeight - e.pageY*speed)/45
 
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


// ====== Animation =======
//navbar animation
gsap.from('.nav_logo',{opacity:0,duration:1,delay:2,y:10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2, y: 30, stagger: 0.2,})

//======= home animation =======

gsap.from('.home__title', {opacity: 0, duration: 1, delay:1, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:1, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1, y: 30})

