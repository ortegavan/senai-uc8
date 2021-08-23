// A agenda de eventos já tem alguns eventos cadastrados
let eventos = [
    { titulo: "Palestra de C#", data: new Date("2021-10-20"), palestrante: "João da Silva", participantes: [] },
    { titulo: "Webinar de JavaScript", data: new Date("2021-11-20"), palestrante: "José da Silva", participantes: [] },
    { titulo: "Palestra de HTML e CSS", data: new Date("2021-12-02"), palestrante: "Pedro da Silva", participantes: [] },
];

// Aqui, um novo evento será adicionado (se data válida)
let dataAtual = new Date();
let dataEvento = new Date("2021-09-15");
if (dataEvento > dataAtual) {  
    let evento = {
        titulo: "Dicas de Visual Studio",
        data: dataEvento,
        palestrante: "Ademir da Silva",
        participantes: []
    };    
    eventos.push(evento);  
} else {
    console.log("Data inválida!");
}       

// Aqui, um novo participante será adicionado ao evento "Webinar de Javascript" (se idade válida e quantidade de participantes < 100)
let idadeParticipante = 20;
if (eventos[1].participantes.length >= 100) {
    console.log("Limite de participantes atingido!");
} else {
    if (idadeParticipante < 18) {
        console.log("Cadastro não permitido para menores de 18 anos.");
    } else {
        eventos[1].participantes.push("Rafael de Souza");
    }
}

// Exibe eventos, palestrante e participantes
console.log(eventos);