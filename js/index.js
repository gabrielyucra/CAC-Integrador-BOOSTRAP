// Trabajo Práctico Integrador JS

// Deberán replicar la siguiente sección (es una sección que se debe agregar al integrador front-End) al presionar en el enlace “tickets”.

// Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets a comprar con el descuento correspondiente dependiendo la categoría seleccionada, existen 3 categorías, Estudiante, Trainee, Junior

const form = document.getElementById("formulario")
const totalAPagar = document.getElementById("resume")
const borrar = document.getElementById("borrar")
const boleto = 200

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let cantidad = document.getElementById('cantidad').value
    let categoria = document.getElementById('categoria').value

    calcDescuento=(off)=>{
        let precio = boleto * cantidad
        let descuento = precio * off /100
        return total = precio - descuento
    }

    if(categoria=="Estudiante"){
        total = calcDescuento(80)

    } else if(categoria=="Trainee"){
        total = calcDescuento(50)

    } else{
        total = calcDescuento(15)
    }
    totalAPagar.innerHTML = `Total a Pagar: $ ${total}`
})

borrar.addEventListener('click', (e)=>{
    totalAPagar.innerHTML = 'Total a Pagar: $'
})