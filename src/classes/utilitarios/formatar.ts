import moment from "moment";

export class Formatar {
  cpfcnpj = (valor: string | undefined): string => {
    if (valor == undefined) return "";

    if (valor.length == 11) {
      return valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    if (valor.length == 14) {
      return valor.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
      );
    }

    return valor as string;
  };
  moeda = (valor: number | undefined): string => {
    if (valor == undefined) return "R$ 0,00";

    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  numero = (valor: number | undefined, decimais?: number): string => {
    if (valor == undefined) return "0";

    return valor.toLocaleString("pt-br", {
      minimumFractionDigits: decimais,
      maximumFractionDigits: decimais,
    });
  };

  telefoneFixo = (valor: string | undefined): string => {

    if (valor == undefined || valor == '') return "-";

    var telefoneFormatado = "-";
    var temDDD = valor.length == 10;

    if (temDDD) {
      telefoneFormatado = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 6) + '-' + valor.substring(6, 10);
    }
    else if (valor.length == 8) {
      telefoneFormatado = valor.substring(0, 4) + '-' + valor.substring(4, 8);
    }
    else {
      telefoneFormatado = valor;
    }
    return telefoneFormatado as string;

  };

  telefoneCelular = (valor: string | undefined): string => {

    if (valor == undefined || valor == '') return "-";

    var telefoneFormatado = "-";
    var temDDD = valor.length == 11;

    if (temDDD) {
      telefoneFormatado = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7, 11);
    }
    else if (valor.length == 9) {
      telefoneFormatado = valor.substring(0, 5) + '-' + valor.substring(5, 9);
    }
    else {
      telefoneFormatado = valor;
    }
    return telefoneFormatado as string;

  };

  CEP = (valor: string | undefined): string => {

    if (valor == undefined) return "-";

    valor = valor.substring(0, 2) + "." + valor.substring(2, 5) + "-" + valor.substring(5, 8)

    return valor as string;
  };

  SI_SYMBOL = ["", "mil", "mi", "bi", "tri", "P", "E"];

  abreviarNumero = (
    valor: number | undefined,
    formataMoeda: boolean = true,
    decimais: number = 2
  ): string => {
    if (!valor) return "";

    let formatter = Intl.NumberFormat("pt-br", {
      notation: "compact",
      style: formataMoeda ? "currency" : "decimal",
      currency: "BRL",
      minimumFractionDigits: 1,
      maximumFractionDigits: decimais,
    });

    return formatter.format(valor);
  };

  abreviarNumero2 = (
    valor: number | undefined,
    formataMoeda: boolean = true,
    decimais: number = 2
  ): string[] => {
    const resultado = this.abreviarNumero(valor, formataMoeda, decimais);

    return resultado.split(String.fromCharCode(160));
  };

  porcentagem = (valor: number | undefined): string => {
    if (valor == undefined) return "0%";
    return valor + "%";
    // return (
    //   valor.toLocaleString("pt-br", {
    //     minimumFractionDigits: 2,
    //     maximumFractionDigits: 2,
    //   }) + "%"
    // );
  };

  data = (valor: Date | undefined, formato?: string): string => {
    if (valor == undefined) return "";

    return moment(valor)
      .locale("pt-br")
      .format(formato ?? "DD/MM/YYYY");
  };

  // Retorna a data com o horario
  dataCompleta = (valor: Date | undefined): string => {
    if (valor == undefined) return "";

    var auxData = `${moment(valor).locale("pt-br").format("DD/MM/YYYY")} às ${moment(valor).locale("pt-br").format("HH:mm:ss")}`;

    return auxData;
  };

  boolean = (valor: boolean | undefined): string => {
    if (valor === undefined || valor === false) return "Não";
    return "Sim";
  };

  cep = (valor: string | undefined): string => {
    if (valor === undefined || valor == null) return "";

    return valor.replace(/^(\d{5})(\d{2})/, '$1-$2');
  }

  primeiroNome = (nomeCompleto: string | undefined): string => {
    if (nomeCompleto === undefined || nomeCompleto === '') return 'Não';

    // Tratamento abaixo pra pegar o sobrenome no caso do Carlos
    return nomeCompleto.includes('Carlos') ? nomeCompleto.split(' ')[1] : nomeCompleto.split(' ')[0];
  }
}

const Instance = new Formatar();

export default Instance;
