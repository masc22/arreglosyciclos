const arrNames = [
    "Francisco", // 0
    "Felix", // 1
    "Mariela", // 2
    "Martin" // 3
]
// Propiedades de los arreglos
// Bracket notation 
console.log(arrNames[1])

// Metod push 
// Meter en el arreglo un nuevo dato al final del arreglo

arrNames.push("Konhin")
console.log(arrNames)

// Unshift
// agrega el elemento al principio
arrNames.unshift("Misa")
console.log(arrNames)

// Shift
// Remueve el primer elemento
arrNames.shift()
console.log(arrNames)

// Pop
// Remueve el primer elemento
arrNames.pop()
console.log(arrNames)

// Splice remueve un elemento en cualquier posicion
arrNames.splice(1, 1)
console.log(arrNames)