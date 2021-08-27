// for
let numeroDeAlunos = 10;
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
	if (contador === 0) {
		console.log("O número atual é ZERO");
	} else if (contador % 2 == 0) {
		console.log("O número " + contador + " é PAR");
	} else {
		console.log("O número " + contador + " é ÍMPAR");
	}
}

// while
let contador = 0;
while (contador < numeroDeAlunos) {
	if (contador === 0) {
		console.log("O número atual é ZERO");
	} else if (contador % 2 == 0) {
		console.log("O número " + contador + " é PAR");
	} else {
		console.log("O número " + contador + " é ÍMPAR");
	}
	contador++;
}

// do..while
contador = 0;
do {
	if (contador === 0) {
		console.log("O número atual é ZERO");
	} else if (contador % 2 == 0) {
		console.log("O número " + contador + " é PAR");
	} else {
		console.log("O número " + contador + " é ÍMPAR");
	}
	contador++;
} while (contador < numeroDeAlunos);

// foreach
let listaDeAlunos = ["João", "José", "Maria", "Pedro"];
listaDeAlunos.forEach((aluno) => {
	console.log(aluno);
});

// for..of
for (let aluno of listaDeAlunos) {
	console.log(aluno);
}