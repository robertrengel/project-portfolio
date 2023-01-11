
const navbarButtom = document.querySelectorAll('.menu-icon')
const navbarButtom2 = document.querySelector('.menu-options--active')

 

navbarButtom2.addEventListener('click', (e) => {
    e.preventDefault()
    for (let i = 0; i <= navbarButtom.length-1; i++) {
        if (navbarButtom[i].classList.contains('hidden')) {
        navbarButtom[i].classList.remove('hidden');
        console.log("Remove")
        navbarButtom2.classList.add('hidden')
        }
        console.log("click")
    }
})

console.log(navbarButtom[0])