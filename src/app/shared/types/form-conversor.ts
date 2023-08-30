export interface Conversao {
  id?: number;
  valor: number;
  moedaDe: string;
  moedaPara: string;
  valorConvertido?: number;
  dataCotacao?: string;
  cotacao?: number;
  excedendoValor: boolean;
}
