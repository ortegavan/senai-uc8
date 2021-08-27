const lista = [
	"Lâmpada",
	"Espelho retrovisor",
	"Cinto de segurança",
	"Radiador",
];
console.log(lista);

if (lista.length < 10) {
	console.log("É possível cadastrar mais peças.");
} else {
	console.log("Não há mais espaço na lista.");
}

let peso = 100;
if (peso >= 100) {
	console.log("Peso da peça está adequado.");
} else {
	console.log("Peso insuficiente.");
}

let nome = "Disco de freio";
if (nome.length > 3) {
	console.log("Nome adequado.");
} else if (console.length == 0) {
	console.log("O nome não pode ser vazio.");
} else {
	console.log("O nome deve possuir mais de 3 caracteres.");
}