//Classe para testar
const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');

const aluno = new Aluno("João", "joao123", "12345");
const turma = new Turma("567", 7.6);
const turmaPresencial = new TurmaPresencial("890", 6, 60);

console.log("Aluno:", aluno);
console.log("Turma:", turma);
console.log("Aprovado na Turma:", turma.aprovado());
console.log("Turma Presencial:", turmaPresencial);
console.log("Aprovado na Turma Presencial:", turmaPresencial.aprovado());
