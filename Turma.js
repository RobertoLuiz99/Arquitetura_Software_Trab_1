module.exports = class Turma {
    constructor(codigo, nota) {
        this._codigo = codigo;
        this._nota = nota;
    }

    aprovado() {
        return this._nota >= 6; // Supondo que a nota mínima para aprovação é 6
    }
};
