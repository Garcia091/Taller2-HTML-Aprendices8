let nombre,
    email,
    descripcion;

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    Leerdatos()
    mostrar()
    document.getElementById('nombre').value = ''
})

function Leerdatos() {
    nombre =  document.getElementById('nombre').value
    email = document.getElementById('email').value
    descripcion = document.getElementById('textarea').value

    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('E-mail',email)
    localStorage.setItem('Desp',descripcion)
  
}

function mostrar() {
    let nombreLocal = localStorage.getItem('Nombre')

    console.log(nombreLocal);
}

