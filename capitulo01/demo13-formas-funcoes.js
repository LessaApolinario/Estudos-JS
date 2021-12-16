function minhaFuncao1(parametro1) {
  return `aeeee`
}

// função anônima
const minhaFuncao2 = function (parametro1) {
  return `aeeee ${parametro1}`
}

// arrow function
const minhaFuncao3 = (parametro1) => {
	return `Olá ${parametro1}`
}

const minhaFuncao4 = parametro1 => `Olá ${parametro1}`

const obj1 = {
  minhaFuncao: parametro1 => `aeeee ${parametro1}`
}

console.log(obj1.minhaFuncao("test"))

const obj2 = {
  minhaFuncao(parametro1) {
    return `aeeee ${parametro1}`
  }
}

console.log(obj2.minhaFuncao("test2"))