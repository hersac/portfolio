window.onload = () =>{
    let links = document.querySelectorAll('.link')
    let btn = document.querySelectorAll('.btn1')

    let btn1 = btn[0]
    btn1.addEventListener('click', () => {
        scrollSuave('#quien', 500, 10)
    })

    let quien = links[0]
    quien.addEventListener('click', () => {
        scrollSuave('#quien', 500, 10)
    })

    let skills = links[1]
    skills.addEventListener('click', () => {
        scrollSuave('#skills', 500, 10)
    })

    let proyect = links[2]
    proyect.addEventListener('click', () => {
        scrollSuave('#proyect', 500, 10)
    })

    let contact = links[3]
    contact.addEventListener('click', () => {
        scrollSuave('#contact', 500, 10)
    })
}

const scrollSuave =(objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
    const animacion = tiempoAhora => {
        if(tiempoInicial === null) tiempoInicial = tiempoAhora
        let tiempoPasado = tiempoAhora - tiempoInicial
        let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
        window.scroll(0, auxAnimacion)
        if(tiempoPasado < duracion) requestAnimationFrame(animacion)    

    }
    requestAnimationFrame(animacion)  
}
const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }