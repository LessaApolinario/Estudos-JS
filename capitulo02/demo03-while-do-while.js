// enquanto não mudar, não para!
let termoDeParada = true
let contador = 0

while (termoDeParada) {
  termoDeParada = contador < 10

  if (contador % 2 == 0) {
    console.log("Número par", contador)
  }

  contador += 1
  // contador = contador + 1
}

// roda a primeira vez e testa a variável depois!
do {
  console.log("Só uma vez! pois termoDeParada é", termoDeParada)
} while (termoDeParada)

while (termoDeParada) {
  // não vai executar
  console.log("Nem vai executar!")
}