import { VctFeriado } from "../api/API";

export const meses = [
  { nome: 'Janeiro', valor: 1 },
  { nome: 'Fevereiro', valor: 2 },
  { nome: 'Março', valor: 3 },
  { nome: 'Abril', valor: 4 },
  { nome: 'Maio', valor: 5 },
  { nome: 'Junho', valor: 6 },
  { nome: 'Julho', valor: 7 },
  { nome: 'Agosto', valor: 8 },
  { nome: 'Setembro', valor: 9 },
  { nome: 'Outubro', valor: 10 },
  { nome: 'Novembro', valor: 11 },
  { nome: 'Dezembro', valor: 12 }
]

export const copyToClipboard = (texto: string) => {
  var el = document.createElement('textarea');
  el.value = texto;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

export const calculoPrazoDiasUteis = (dataInicio: Date, prazo: number, feriados: VctFeriado[]): Date => {

  var count = 0;
  var prazoFinal = new Date;
  let dataAux = new Date(dataInicio.toDateString());

  if (prazo != 0){
    while(count < prazo){
      prazoFinal = new Date(dataAux.setDate(dataAux.getDate() + 1));
      if (prazoFinal.getDay() !== 0 && prazoFinal.getDay() !== 6 && feriados.filter(s => s.dataInicio! <= prazoFinal && prazoFinal <= s.dataFinal!).length === 0){ 
        count++;
      }
    }
    return prazoFinal;
  }
  
  return dataInicio;
};

export const calculaPrazoDiasCorrentes = (dataInicio: Date, prazo: number): Date => {
  let dataAux = new Date(dataInicio.toDateString());
  dataAux.setDate(dataAux.getDate() + prazo);
  return dataAux;
};