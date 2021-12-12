let salarioDoAmigo = 1000
let meuSalario = "2999.14"
let meuSalarioCorrigido = Number(meuSalario)

// concatenação
// resulta numa string
console.log(salarioDoAmigo + meuSalarioCorrigido) // 3999
console.log(typeof(salarioDoAmigo), salarioDoAmigo) // number 1000
console.log(typeof(meuSalario), meuSalario) // string "2999"
console.log(isNaN(meuSalario)) // false

let minhaString = 'Olá mundo!'
let minhaOutraString = "Olá mundo2"
let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString}. AE!`

console.log(minhaStringComVariaveis)