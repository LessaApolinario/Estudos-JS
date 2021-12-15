// Por convenção usamos _ antes de declarar uma variável,
// caso queiramos que ela seja "privada"
const pessoa = {
  _nome: "",
  _idade: 20,
  get nome() {
    return this._nome
  },
  set nome(valor) {
    this._nome = valor.toUpperCase()
  },
  get podeDirigir() {
    return this._idade > 18
  },
  set idade(valor) {
    this._idade = valor
  }
}

// Usando o método set
pessoa.nome = "Maria do céu"
// Usando o método get
console.log(pessoa.nome)

// Usando o método set
pessoa.idade = 16
// Usando propriedade calculada
console.log(pessoa.podeDirigir)
console.log(pessoa.idade) // undefined, porque não get para retornar a idade