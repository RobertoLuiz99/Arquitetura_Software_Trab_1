const Turma = require('./Turma');

module.exports = class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this._frequencia = frequencia;
    }

    aprovado() {
        return super.aprovado() && this._frequencia >= 75; // Supondo que a frequência mínima para aprovação é 75%
    }
};
