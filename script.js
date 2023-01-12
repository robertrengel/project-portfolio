const links = document.querySelectorAll('.link')
const menuOptionsActive = document.querySelectorAll('.menu-options--active')

links.forEach(link =>{
  link.addEventListener(('click'),(e)=>{
    e.preventDefault()
    if(link.children[0].classList.contains('hidden')){
      link.children[0].classList.remove('hidden')
      link.children[1].classList.add('hidden')
    }else if(link.children[1].classList.contains('hidden')){
      link.children[1].classList.remove('hidden')
      link.children[0].classList.add('hidden')
    }
    
    console.log(link.children[0])
  })})
