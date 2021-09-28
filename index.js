for(let i =1; i<= 10; i++){
    console.log(i)
}

// While
let i = 1
while(i <= 10) {
    console.log(i)
    i++
}

// Repaso de las funciones
// Bloques de codigo que podemos reutilizar
// Declaracion
// Por lo regular ya no se usa
function Saludar(){
    console.log('Hola como estas?')
}

// Invocacion
Saludar()

// ES6+
// Arrow function
const saludar2 = (mensaje) => {
    return `10:13 - ${mensaje}`
}
console.log(saludar2('Hello there!'))

// Haga una funcion que me diga si soy mayor de edad o no
const validaEdad = (edad) => {
    if(edad <= 18){
        return "Es menor de edad"
    } else {
        return "Es mayor de edad"
    }
}

console.log(validaEdad(5))

const obtenerInformacion = (usuario) => {
    return usuario
}
const infoUser1 = obtenerInformacion({
    nombre: "Konhin",
    apellido: "Claro"
})
console.log(infoUser1)

// Objeto
const year = 2021
const nuevoObjeto = {
    marca: "Honda",
    new: true,
    year: year,
    info: {
        dueno: infoUser1,
        id: 12312424,
        placa: "AWS-1132"
    }
}

// Areglos 
const arreglo = [
    "Martin",
    "Francisco",
    "Felix",
    "Mariela",
    nuevoObjeto
]
console.log(arreglo)