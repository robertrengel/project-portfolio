const links = document.querySelectorAll('.link')
const menuOptionsActive = document.querySelectorAll('.menu-options--active')
const menuOptions = document.querySelector('.menu-options')

const clearLinks = () =>{
  links.forEach(option =>{
   
    option.children[0].classList.remove('hidden')
    option.children[1].classList.add('hidden')
  })
}

//clearLinks()
links.forEach(link =>{
  link.addEventListener(('click'),(e)=>{
    e.preventDefault()
    clearLinks()
    if(link.children[0].classList.contains('hidden')){
      link.children[0].classList.remove('hidden')
      link.children[1].classList.add('hidden')
    }else if(link.children[1].classList.contains('hidden')){
      link.children[1].classList.remove('hidden')
      link.children[0].classList.add('hidden')
    }
  })})
  
//funcion que desplaza el scroll
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    console.log(targetId)
    scrollToSection(targetId)
    
  });
});


const scrollToSection = (id) => {
    let section = document.getElementById(id);
    let position = section.offsetTop;
    window.scroll({
      top: position,
      left: 0,
      behavior: 'smooth'
    });
  }
