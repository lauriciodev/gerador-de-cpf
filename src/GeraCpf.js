import ValidaCpf from "./ValidaCpf";

class GeraCpf {
  rand(min = 100000000, max = 999999999) {
    let digito = String(Math.floor(Math.random() * (max - min) + min));
    
    return digito;
  }

  formataCpf(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 11)
    );
  }
  geraNovoCpf() {
    const cpfSemDigito = this.rand();
    const digito1 = ValidaCpf.geraDigito(cpfSemDigito);
    const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1);
    const novoCpf = cpfSemDigito + digito1 + digito2;
    const cpfForm = this.formataCpf(String(novoCpf));
    return cpfForm;
  }
}

const cpf1 = new GeraCpf();
export { cpf1 };
