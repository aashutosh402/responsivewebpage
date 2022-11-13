
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
        const x = (window.innerWidth - e.pageX*speed)/45
        const y = (window.innerHeight - e.pageY*speed)/45
 
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


