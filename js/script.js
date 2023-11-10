 // Aquí tu código
const agregar = document.getElementById('agregar');
const lista = document.getElementById('lista');

agregar.addEventListener('click', function(){
    let cartel = prompt('agregar elemnto');
    let cartelUno = document.createElement('li');
    cartelUno.innerText = cartel;
    lista.appendChild(cartelUno);
});