const burger = document.querySelector('.burger')
const menu = document.querySelector('.mobile-menu')
const mainMenu = document.querySelector('.mainMenu')

let mobileOpen = false

burger.addEventListener('click', () => {
    if (!mobileOpen) {
        menu.style.maxHeight = '500px'
        mobileOpen = !mobileOpen
    } else {
        menu.style.maxHeight = '0'
        mobileOpen = !mobileOpen
    }
})

window.addEventListener('scroll', () => {
    const scroll = window.scrollY
    if (scroll > 20) {
        mainMenu.style.position = 'fixed'
        mainMenu.style.top = '0'
        mainMenu.style.backgroundColor = 'rgba(255, 255, 255, .95)'
    } else {
        mainMenu.style.position = 'relative'
        mainMenu.style.backgroundColor = 'white'
    }
})