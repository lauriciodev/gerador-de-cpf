//705.484.450-52

export default class ValidaCpf {
  constructor(cpfPassado) {
    Object.defineProperty(this, "validaCpf", {
      configurable: false,
      writable: false,
      enumerable: true,
      value: cpfPassado.replace(/\D+/g, ""),
    });
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.validaCpf.slice(0, -2);
    const digito1 = this.geraDigito(cpfSemDigitos);
    const digito2 = this.geraDigito(cpfSemDigitos + digito1);
    const novoCpf = cpfSemDigitos + digito1 + digito2;
    return novoCpf;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverse = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += reverse * Number(stringNumerica);
      reverse--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  isSequence() {
    return (
      this.validaCpf.charAt(0).repeat(this.validaCpf.length) === this.validaCpf
    );
  }

  //metodos
  valida() {
    //validando cpf
    if (!this.validaCpf) return false;
    if (typeof this.validaCpf !== "string") return false;
    if (this.validaCpf.length !== 11) return false;
    if (this.isSequence()) return "cpf inválido";
    if (this.geraNovoCpf() === this.validaCpf) {
      return " cpf válido";
    } else {
      return "cpf inválido";
    }
  }
}
