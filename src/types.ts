export interface DadosCadastrais {
  nome: string;
  situacaoCpf: string;
  cpf: string;
  dataNascimento: string;
  idade: string;
  nomeMae: string;
  origemCpf: string;
  sexo: string;
  telefone: string;
}

export interface Localizacao {
  endereco: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
}

export interface HistoricoEndereco {
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidadeUf: string;
  cep: string;
}

export interface Ocorrencia {
  titulo: string;
  totalOcorrencias: number;
  valorTotal?: number;
  fonte: string;
  status: "Atencao" | "OK";
  detalhe?: string;
}

export interface HistoricoConsulta {
  data: string;
  tempoAtras: string;
  empresa: string;
}

export interface HistoricoTelefone {
  ddd: string;
  numero: string;
  tipo: string;
}

export interface ProcessoJudicial {
  numero: string;
  orgao: string;
  classe: string;
  situacao: string;
  distribuicao: string;
  valor: number;
  assunto: string;
}

export interface BacenCredito {
  descricao: string;
  valor: number;
  meses?: number | string;
  percentual: number;
}

export interface OperacaoDetalhada {
  codigo: string;
  descricao: string;
  valor: number;
  meses: number;
  percentual: number;
  restritivo: "Sim" | "Não";
}

export interface OperacaoResumo {
  modalidade: string;
  descricao: string;
  total: number;
  percentual: number;
  variacaoCambial: number;
  detalhes?: OperacaoDetalhada[];
}
