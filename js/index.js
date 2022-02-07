const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const toggleButton = document.getElementsByClassName('toggle-but')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
