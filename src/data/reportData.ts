import { 
  DadosCadastrais, 
  Localizacao, 
  HistoricoEndereco, 
  Ocorrencia, 
  HistoricoConsulta, 
  HistoricoTelefone, 
  ProcessoJudicial, 
  BacenCredito, 
  OperacaoResumo 
} from "../types";

export const DADOS_CADASTRAIS: DadosCadastrais = {
  nome: "João da Silva",
  situacaoCpf: "Regular",
  cpf: "999.999.999-99",
  dataNascimento: "15/05/1980",
  idade: "46 anos e 2 meses",
  nomeMae: "MARIA DA SILVA",
  origemCpf: "SÃO PAULO (SP)",
  sexo: "MASCULINO",
  telefone: "(11) 98765-4321"
};

export const LOCALIZACAO: Localizacao = {
  endereco: "FREI SATURNINO BENZING, Nº 5, COMPLEMENTO C",
  bairro: "BNH",
  cep: "79890-092",
  cidade: "ITAPORA",
  uf: "MS"
};

export const HISTORICO_ENDERECOS: HistoricoEndereco[] = [
  {
    endereco: "FREI SATURNINO BENZING",
    numero: "5",
    complemento: "C",
    bairro: "BNH",
    cidadeUf: "ITAPORA/MS",
    cep: "79890000"
  },
  {
    endereco: "FREI SARTININO BENZING",
    numero: "-",
    complemento: "-",
    bairro: "BNH",
    cidadeUf: "ITAPORA/MS",
    cep: "79890-092"
  }
];

export const OCORRENCIAS_COM: Ocorrencia[] = [
  {
    titulo: "Pendências Financeiras",
    totalOcorrencias: 12,
    valorTotal: 13875667.57,
    fonte: "Fonte II",
    status: "Atencao",
    detalhe: "Presença de restrições de pagamentos comerciais e duplicatas em aberto."
  },
  {
    titulo: "Restrições em aberto",
    totalOcorrencias: 12,
    valorTotal: 4244300.00,
    fonte: "Fonte III",
    status: "Atencao",
    detalhe: "Restrições ativas em bureaus de proteção ao crédito."
  },
  {
    titulo: "Crédito Vencido - BACEN",
    totalOcorrencias: 1,
    valorTotal: 1238396.00,
    fonte: "Fonte II",
    status: "Atencao",
    detalhe: "Relatório de empréstimos não pagos reportados ao SCR do BACEN."
  },
  {
    titulo: "Protestos",
    totalOcorrencias: 13,
    valorTotal: 477640.00,
    fonte: "Fonte III",
    status: "Atencao",
    detalhe: "Títulos protestados em cartório de protesto de Dourados/MS."
  },
  {
    titulo: "Processos lesivos a crédito",
    totalOcorrencias: 27,
    valorTotal: 62377178.57,
    fonte: "Fonte III",
    status: "Atencao",
    detalhe: "Ações judiciais ativas com polo passivo com impacto econômico alto."
  },
  {
    titulo: "Pendências Bancárias",
    totalOcorrencias: 7,
    valorTotal: 5814429.52,
    fonte: "Fonte IV",
    status: "Atencao",
    detalhe: "Registros de inadimplência de crédito diretamente com instituições bancárias."
  },
  {
    titulo: "Cheques sem Fundos",
    totalOcorrencias: 1,
    valorTotal: 12.00, // custom placeholder or specific if detail found
    fonte: "Fonte IV",
    status: "Atencao",
    detalhe: "Registro de cheque sem provisão de fundos devolvido (Motivo 12)."
  },
  {
    titulo: "Ações e Processos Judiciais",
    totalOcorrencias: 46,
    valorTotal: 105834014.95,
    fonte: "TJ-MS / TJ-PR",
    status: "Atencao",
    detalhe: "Causas civis em tramitação e execuções fiscais/extrajudiciais de valores expressivos."
  }
];

export const OCORRENCIAS_SEM: Ocorrencia[] = [
  {
    titulo: "Prejuízo - BACEN",
    totalOcorrencias: 0,
    fonte: "BACEN SCR",
    status: "OK",
    detalhe: "Nenhuma operação marcada como prejuízo declarada nos últimos 60 meses."
  },
  {
    titulo: "Negativações Registradas",
    totalOcorrencias: 0,
    fonte: "Bureaus Gerais",
    status: "OK",
    detalhe: "Nenhuma outra negativação além das citadas acima foi registrada."
  },
  {
    titulo: "Ações Cíveis",
    totalOcorrencias: 0,
    fonte: "Justiça Estadual",
    status: "OK",
    detalhe: "Nenhum processo cível com impacto restritivo fora das ocorrências judiciais descritas."
  },
  {
    titulo: "Cheques sem Fundos",
    totalOcorrencias: 0,
    fonte: "CCF",
    status: "OK",
    detalhe: "Nenhum outro cheque devolvido fora do reportado pela Fonte IV."
  },
  {
    titulo: "Participação em Empresas",
    totalOcorrencias: 0,
    fonte: "Junta Comercial",
    status: "OK",
    detalhe: "Nenhum vínculo como sócio, administrador ou acionista societário ativo."
  },
  {
    titulo: "Protesto Nacional",
    totalOcorrencias: 0,
    fonte: "CENPROT",
    status: "OK",
    detalhe: "Nenhum outro título de protesto nacional ativo fora de Dourados/MS."
  },
  {
    titulo: "CADIN — Dívida Ativa",
    totalOcorrencias: 0,
    fonte: "Receita Federal",
    status: "OK",
    detalhe: "Sem registro de inadimplência junto a órgãos da administração pública federal."
  },
  {
    titulo: "Histórico de E-mails",
    totalOcorrencias: 0,
    fonte: "Bureaus Cadastrais",
    status: "OK",
    detalhe: "Nenhum histórico de e-mail suspeito ou divergente detectado."
  }
];

export const HISTORICO_CONSULTAS: HistoricoConsulta[] = [
  { data: "07/07/2026", tempoAtras: "há 3 dias", empresa: "SNE ANALISE DE RISCO LTDA" },
  { data: "06/07/2026", tempoAtras: "há 4 dias", empresa: "VIRO TURISMO BRASIL LTDA" },
  { data: "03/07/2026", tempoAtras: "há 7 dias", empresa: "VIRO TURISMO BRASIL LTDA" },
  { data: "21/05/2026", tempoAtras: "há 1 mês", empresa: "VIRO TURISMO BRASIL LTDA" },
  { data: "07/07/2026", tempoAtras: "há 3 dias", empresa: "SNE ANALISE DE RISCO LTDA" },
  { data: "18/05/2026", tempoAtras: "há 2 meses", empresa: "COOPERATIVA CREDIVALLES" },
  { data: "10/05/2026", tempoAtras: "há 2 meses", empresa: "AURA FINANÇAS S/A" },
  { data: "05/04/2026", tempoAtras: "há 3 meses", empresa: "SOUZA & CIA LTDA" },
  { data: "12/03/2026", tempoAtras: "há 4 meses", empresa: "PERFIM COMERCIAL S.A." },
  { data: "01/03/2026", tempoAtras: "há 4 meses", empresa: "VIRO TURISMO BRASIL LTDA" },
  { data: "15/02/2026", tempoAtras: "há 5 meses", empresa: "TELECOM BRASIL S/A" },
  { data: "28/01/2026", tempoAtras: "há 5 meses", empresa: "BANCO KRONOS S.A." },
  { data: "10/01/2026", tempoAtras: "há 6 meses", empresa: "SNE ANALISE DE RISCO LTDA" }
];

export const HISTORICO_TELEFONES: HistoricoTelefone[] = [
  { ddd: "(67)", numero: "34513571", tipo: "TELEFONE RESIDENCIAL" },
  { ddd: "(67)", numero: "999718125", tipo: "TELEFONE MÓVEL" },
  { ddd: "(67)", numero: "999718606", tipo: "TELEFONE MÓVEL" },
  { ddd: "(67)", numero: "34214115", tipo: "TELEFONE RESIDENCIAL" },
  { ddd: "(67)", numero: "34512324", tipo: "TELEFONE COMERCIAL" }
];

export const PROCESSOS_JUDICIAIS: ProcessoJudicial[] = [
  {
    numero: "08003121120268120037",
    orgao: "TJ-MS",
    classe: "PROCEDIMENTO DO JUIZADO ESPECIAL DA FAZENDA PUBLICA",
    situacao: "EM TRAMITACAO",
    distribuicao: "16/03/2026",
    valor: 1000.00,
    assunto: "CIVEL"
  },
  {
    numero: "08001831820268120033",
    orgao: "TJ-MS",
    classe: "EXECUCAO DE TITULO EXTRAJUDICIAL",
    situacao: "ARQUIVAMENTO PROVISORIO",
    distribuicao: "12/03/2026",
    valor: 3293611.00,
    assunto: "CIVEL"
  },
  {
    numero: "08002047920268120037",
    orgao: "TJ-MS",
    classe: "CARTA PRECATORIA CIVEL",
    situacao: "EM TRAMITACAO",
    distribuicao: "24/02/2026",
    valor: 7151502.18,
    assunto: "CIVEL"
  },
  {
    numero: "00000266620268120037",
    orgao: "TJ-MS",
    classe: "CARTA PRECATORIA CIVEL",
    situacao: "EM TRAMITACAO",
    distribuicao: "19/02/2026",
    valor: 213466.85,
    assunto: "CIVEL"
  },
  {
    numero: "16082013120258120000",
    orgao: "TJ-MS",
    classe: "CONFLITO DE COMPETENCIA CIVEL",
    situacao: "ARQUIVAMENTO DEFINITIVO",
    distribuicao: "18/11/2025",
    valor: 308058.66,
    assunto: "CIVEL"
  },
  {
    numero: "14172966920258120000",
    orgao: "TJ-MS",
    classe: "AGRAVO DE INSTRUMENTO",
    situacao: "ARQUIVAMENTO DEFINITIVO",
    distribuicao: "08/10/2025",
    valor: 2133760.00,
    assunto: "CIVEL"
  },
  {
    numero: "00105066320258160058",
    orgao: "TJ-PR",
    classe: "EXECUCAO DE TITULO EXTRAJUDICIAL",
    situacao: "SUSPENSO",
    distribuicao: "07/10/2025",
    valor: 7151502.18,
    assunto: "VARA CIVEL"
  },
  {
    numero: "14113415720258120000",
    orgao: "TJ-MS",
    classe: "EMBARGOS DE DECLARACAO CIVEL",
    situacao: "EM TRAMITACAO",
    distribuicao: "29/07/2025",
    valor: 2171561.59,
    assunto: "CIVEL"
  },
  {
    numero: "08005413920248120037",
    orgao: "TJ-MS",
    classe: "EXECUCAO DE TITULO EXTRAJUDICIAL",
    situacao: "EM TRAMITACAO",
    distribuicao: "25/07/2025",
    valor: 1067044.58,
    assunto: "CIVEL"
  },
  {
    numero: "14113476420258120000",
    orgao: "TJ-MS",
    classe: "AGRAVO DE INSTRUMENTO",
    situacao: "ARQUIVAMENTO DEFINITIVO",
    distribuicao: "14/07/2025",
    valor: 1050574.28,
    assunto: "CIVEL"
  }
];

export const PENDENCIAS_FINANCEIRAS_ROWS = [
  { data: "27/04/2026", disponib: "27/04/2026", informante: "BANCO DELTA S.A.", cidade: "OSASCO", tipo: "EMPRES CONTA", contrato: "01890245190CSC...", valor: 1931.57 },
  { data: "20/04/2026", disponib: "20/04/2026", informante: "BANCO DELTA S.A.", cidade: "OSASCO", tipo: "CRED CARTAO", contrato: "018902451904351...", valor: 2627.63 },
  { data: "15/04/2026", disponib: "15/04/2026", informante: "COOPERATIVA CREDIVALLES", cidade: "CANOAS", tipo: "OUTRAS OPER", contrato: "00000000000000...", valor: 216991.55 },
  { data: "15/04/2026", disponib: "15/04/2026", informante: "BANCO KRONOS S.A.", cidade: "BRASILIA", tipo: "OUTRAS OPER", contrato: "156801910026664...", valor: 11044.41 },
  { data: "08/04/2026", disponib: "08/04/2026", informante: "BANCO KRONOS S.A.", cidade: "BRASILIA", tipo: "OPER IMOBILI", contrato: "15684616224344...", valor: 34502.84 },
  { data: "18/02/2026", disponib: "18/02/2026", informante: "COOPERATIVA CREDIVALLES", cidade: "CANOAS", tipo: "OUTRAS OPER", contrato: "00000000000000...", valor: 171367.39 },
  { data: "30/09/2024", disponib: "30/09/2024", informante: "PLANALTO INSUMOS AGRÍCOLAS S.A.", cidade: "SAO JOSE DOS CAMPOS", tipo: "DUPLICATA", contrato: "66272-73511", valor: 7200.00 },
  { data: "30/09/2024", disponib: "30/09/2024", informante: "PLANALTO INSUMOS AGRÍCOLAS S.A.", cidade: "SAO JOSE DOS CAMPOS", tipo: "DUPLICATA", contrato: "66267-72624", valor: 2290.00 },
  { data: "30/08/2024", disponib: "30/08/2024", informante: "SOUZA & CIA LTDA", cidade: "LONDRINA", tipo: "DUPLICATA", contrato: "AGRO100", valor: 550000.00 },
  { data: "30/01/2024", disponib: "30/01/2024", informante: "NEXA DISTRIBUIDORA DE INSUMOS S.A.", cidade: "CHAPADAO DO SUL", tipo: "OPER AGRIC", contrato: "NF EM ABERTO", valor: 4735120.00 },
  { data: "30/01/2024", disponib: "30/01/2024", informante: "NEXA DISTRIBUIDORA DE INSUMOS S.A.", cidade: "CHAPADAO DO SUL", tipo: "OUTRAS OPER", contrato: "NOTAS", valor: 2625990.00 },
  { data: "30/01/2024", disponib: "30/01/2024", informante: "NEXA DISTRIBUIDORA DE INSUMOS S.A.", cidade: "CHAPADAO DO SUL", tipo: "OPER AGRIC", contrato: "NF VENCIDAS", valor: 5516602.18 }
];

export const RESTRICOES_FINANCEIRAS_ROWS = [
  { data: "18/05/2026", disponib: "20/05/2026", informante: "COOPERATIVA CREDIVALLES", cidade: "CANOAS", tipo: "—", contrato: "0194817293...", valor: 154000.00 },
  { data: "10/04/2026", disponib: "12/04/2026", informante: "BANCO DELTA S.A.", cidade: "OSASCO", tipo: "—", contrato: "0918237190...", valor: 78500.00 },
  { data: "22/03/2026", disponib: "25/03/2026", informante: "BANCO KRONOS S.A.", cidade: "BRASILIA", tipo: "—", contrato: "9928172635...", valor: 12450.00 },
  { data: "05/01/2026", disponib: "10/01/2026", informante: "TELECOM BRASIL S/A", cidade: "SAO PAULO", tipo: "—", contrato: "55128374...", valor: 850.00 },
  { data: "14/12/2025", disponib: "15/12/2025", informante: "SOUZA & CIA LTDA", cidade: "LONDRINA", tipo: "—", contrato: "A192837...", valor: 250000.00 },
  { data: "28/11/2025", disponib: "01/12/2025", informante: "PLANALTO INSUMOS AGRÍCOLAS S.A.", cidade: "SAO JOSE DOS CAMPOS", tipo: "—", contrato: "66272...", valor: 45000.00 },
  { data: "15/10/2025", disponib: "18/10/2025", informante: "NEXA DISTRIBUIDORA DE INSUMOS S.A.", cidade: "CHAPADAO DO SUL", tipo: "—", contrato: "NFX-9981...", valor: 1250000.00 },
  { data: "30/08/2025", disponib: "02/09/2025", informante: "COOPERATIVA CREDIVALLES", cidade: "CANOAS", tipo: "—", contrato: "000000123...", valor: 95000.00 },
  { data: "12/07/2025", disponib: "15/07/2025", informante: "BANCO DELTA S.A.", cidade: "OSASCO", tipo: "—", contrato: "01890245...", valor: 18500.00 },
  { data: "25/06/2025", disponib: "28/06/2025", informante: "BANCO KRONOS S.A.", cidade: "BRASILIA", tipo: "—", contrato: "15684616...", valor: 890000.00 },
  { data: "05/05/2025", disponib: "08/05/2025", informante: "SOUZA & CIA LTDA", cidade: "LONDRINA", tipo: "—", contrato: "AGRO200...", valor: 350000.00 },
  { data: "19/04/2025", disponib: "22/04/2025", informante: "NEXA DISTRIBUIDORA DE INSUMOS S.A.", cidade: "CHAPADAO DO SUL", tipo: "—", contrato: "NF-9982...", valor: 1100000.00 }
];

export const TITULOS_PROTESTADOS_ROWS = [
  { data: "30/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 26850.00 },
  { data: "30/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 10440.00 },
  { data: "30/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 22500.00 },
  { data: "30/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 8870.00 },
  { data: "30/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 59400.00 },
  { data: "30/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 31320.00 },
  { data: "30/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 26100.00 },
  { data: "30/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 120440.00 },
  { data: "30/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 89400.00 },
  { data: "30/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 40460.00 },
  { data: "28/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 15600.00 },
  { data: "25/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 22100.00 },
  { data: "20/03/2026", cartorio: "1º cartório", cidade: "DOURADOS", estado: "MS", vencimento: "-", valor: 23500.00 }
];

export const PENDENCIAS_BANCARIAS_ROWS = [
  { data: "03/02/2025", disponib: "03/02/2025", informante: "0-BANCO KRONOS S.A.", tipo: "COMPRADOR", valor: 82231.59 },
  { data: "05/10/2024", disponib: "05/10/2024", informante: "0-BANCO KRONOS S.A.", tipo: "COMPRADOR", valor: 3122362.66 },
  { data: "30/11/2024", disponib: "30/11/2024", informante: "0-BANCO KRONOS S.A.", tipo: "COMPRADOR", valor: 496808.65 },
  { data: "10/11/2024", disponib: "10/11/2024", informante: "0-BANCO KRONOS S.A.", tipo: "COMPRADOR", valor: 13602.53 },
  { data: "28/02/2025", disponib: "28/02/2025", informante: "0-BANCO KRONOS S.A.", tipo: "COMPRADOR", valor: 190234.47 },
  { data: "16/09/2024", disponib: "16/09/2024", informante: "0-BANCO KRONOS S.A.", tipo: "COMPRADOR", valor: 1906561.99 },
  { data: "20/04/2026", disponib: "20/04/2026", informante: "0-BANCO DELTA S.A.", tipo: "COMPRADOR", valor: 2627.63 }
];

export const BACEN_CREDITO_A_VENCER: BacenCredito[] = [
  { descricao: "Total", valor: 35943970.36, percentual: 96.34 },
  { descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 2269429.33, meses: 1, percentual: 6.08 },
  { descricao: "CREDITOS A VENCER DE 31 A 60 DIAS", valor: 206370.63, meses: 2, percentual: 0.55 },
  { descricao: "CREDITOS A VENCER DE 61 A 90 DIAS", valor: 364512.36, meses: 3, percentual: 0.98 },
  { descricao: "CREDITOS A VENCER DE 91 A 180 DIAS", valor: 435238.52, meses: 6, percentual: 1.17 },
  { descricao: "CREDITOS A VENCER DE 181 A 360 DIAS", valor: 4460512.37, meses: 12, percentual: 11.96 },
  { descricao: "CREDITOS A VENCER DE 361 A 720 DIAS", valor: 1285794.42, meses: 24, percentual: 3.45 },
  { descricao: "CREDITOS A VENCER DE 721 A 1080 DIAS", valor: 4392296.75, meses: 36, percentual: 11.77 },
  { descricao: "CREDITOS A VENCER DE 1081 A 1440 DIAS", valor: 4003788.21, meses: 48, percentual: 10.73 },
  { descricao: "CREDITOS A VENCER DE 1441 A 1800 DIAS", valor: 3907890.44, meses: 60, percentual: 10.47 },
  { descricao: "CREDITOS A VENCER DE 1801 A 5400 DIAS", valor: 14618137.33, meses: 180, percentual: 39.18 }
];

export const BACEN_CREDITO_VENCIDO: BacenCredito[] = [
  { descricao: "Total", valor: 1238396.00, percentual: 3.32 },
  { descricao: "CREDITOS VENCIDOS DE 15 A 30 DIAS", valor: 96196.94, meses: 1, percentual: 0.26 },
  { descricao: "CREDITOS VENCIDOS DE 31 A 60 DIAS", valor: 995598.78, meses: 2, percentual: 2.67 },
  { descricao: "CREDITOS VENCIDOS DE 91 A 120 DIAS", valor: 146600.28, meses: 4, percentual: 0.39 }
];

export const BACEN_LIMITE_CREDITO: BacenCredito[] = [
  { descricao: "Total", valor: 125931.47, percentual: 0.34 },
  { descricao: "LIMITE DE CREDITO COM VENCIMENTO ATE 360 DIAS", valor: 22500.00, meses: 12, percentual: 0.06 },
  { descricao: "LIMITE DE CREDITO COM VENCIMENTO ACIMA DE 360 DIAS", valor: 103431.47, meses: 12, percentual: 0.28 }
];

export const OPERACOES_DADOS: OperacaoResumo[] = [
  {
    modalidade: "ADIANTAMENTOS A DEPOSITANTES",
    descricao: "ADIANTAMENTOS A DEPOSITANTES",
    total: 20.46,
    percentual: 0.00,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 20.46, meses: 1, percentual: 0.00, restritivo: "Não" }
    ]
  },
  {
    modalidade: "EMPRÉSTIMOS",
    descricao: "CREDITO PESSOAL - SEM CONSIGNACAO EM FOLHA DE PAGAMENTO.",
    total: 34821.91,
    percentual: 0.09,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 3809.33, meses: 1, percentual: 0.01, restritivo: "Não" },
      { codigo: "V120", descricao: "CREDITOS A VENCER DE 31 A 60 DIAS", valor: 1800.42, meses: 2, percentual: 0.00, restritivo: "Não" },
      { codigo: "V130", descricao: "CREDITOS A VENCER DE 61 A 90 DIAS", valor: 1735.01, meses: 3, percentual: 0.00, restritivo: "Não" },
      { codigo: "V140", descricao: "CREDITOS A VENCER DE 91 A 180 DIAS", valor: 4823.92, meses: 6, percentual: 0.01, restritivo: "Não" },
      { codigo: "V150", descricao: "CREDITOS A VENCER DE 181 A 360 DIAS", valor: 8163.62, meses: 12, percentual: 0.02, restritivo: "Não" },
      { codigo: "V160", descricao: "CREDITOS A VENCER DE 361 A 720 DIAS", valor: 10932.23, meses: 24, percentual: 0.03, restritivo: "Não" },
      { codigo: "V165", descricao: "CREDITOS A VENCER DE 721 A 1080 DIAS", valor: 1548.04, meses: 36, percentual: 0.00, restritivo: "Não" },
      { codigo: "V220", descricao: "CREDITOS VENCIDOS DE 31 A 60 DIAS", valor: 2009.34, meses: 2, percentual: 0.01, restritivo: "Sim" }
    ]
  },
  {
    modalidade: "EMPRÉSTIMOS",
    descricao: "CREDITO ROTATIVO VINCULADO A CARTAO DE CREDITO",
    total: 45.33,
    percentual: 0.00,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 45.33, meses: 1, percentual: 0.00, restritivo: "Não" }
    ]
  },
  {
    modalidade: "EMPRÉSTIMOS",
    descricao: "CARTAO DE CREDITO – COMPRA, FATURA PARCELADA OU SAQUE FINANCIADO PELA INSTITUICAO EMITENTE DO CARTAO",
    total: 12914.25,
    percentual: 0.03,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 2354.65, meses: 1, percentual: 0.01, restritivo: "Não" },
      { codigo: "V120", descricao: "CREDITOS A VENCER DE 31 A 60 DIAS", valor: 424.00, meses: 2, percentual: 0.00, restritivo: "Não" },
      { codigo: "V130", descricao: "CREDITOS A VENCER DE 61 A 90 DIAS", valor: 381.63, meses: 3, percentual: 0.00, restritivo: "Não" },
      { codigo: "V140", descricao: "CREDITOS A VENCER DE 91 A 180 DIAS", valor: 1386.91, meses: 6, percentual: 0.00, restritivo: "Não" },
      { codigo: "V150", descricao: "CREDITOS A VENCER DE 181 A 360 DIAS", valor: 2580.03, meses: 12, percentual: 0.01, restritivo: "Não" },
      { codigo: "V220", descricao: "CREDITOS VENCIDOS DE 31 A 60 DIAS", valor: 5787.03, meses: 2, percentual: 0.02, restritivo: "Sim" }
    ]
  },
  {
    modalidade: "EMPRÉSTIMOS",
    descricao: "CHEQUE ESPECIAL",
    total: 21841.66,
    percentual: 0.06,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 21841.66, meses: 1, percentual: 0.06, restritivo: "Não" }
    ]
  },
  {
    modalidade: "EMPRÉSTIMOS",
    descricao: "CARTAO DE CREDITO - NAO MIGRADO 50 RECEBIVEIS ADQUIRIDOS",
    total: 189.29,
    percentual: 0.00,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V220", descricao: "CREDITOS VENCIDOS DE 31 A 60 DIAS", valor: 189.29, meses: 2, percentual: 0.00, restritivo: "Sim" }
    ]
  },
  {
    modalidade: "EMPRÉSTIMOS",
    descricao: "OUTROS EMPRESTIMOS",
    total: 7727635.39,
    percentual: 20.71,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 5464.89, meses: 1, percentual: 0.01, restritivo: "Não" },
      { codigo: "V120", descricao: "CREDITOS A VENCER DE 31 A 60 DIAS", valor: 99073.58, meses: 2, percentual: 0.27, restritivo: "Não" },
      { codigo: "V130", descricao: "CREDITOS A VENCER DE 61 A 90 DIAS", valor: 5224.79, meses: 3, percentual: 0.01, restritivo: "Não" },
      { codigo: "V140", descricao: "CREDITOS A VENCER DE 91 A 180 DIAS", valor: 182963.19, meses: 6, percentual: 0.49, restritivo: "Não" },
      { codigo: "V150", descricao: "CREDITOS A VENCER DE 181 A 360 DIAS", valor: 1661805.48, meses: 12, percentual: 4.45, restritivo: "Não" },
      { codigo: "V160", descricao: "CREDITOS A VENCER DE 361 A 720 DIAS", valor: 189689.74, meses: 24, percentual: 0.51, restritivo: "Não" },
      { codigo: "V165", descricao: "CREDITOS A VENCER DE 721 A 1080 DIAS", valor: 802179.86, meses: 36, percentual: 2.15, restritivo: "Não" },
      { codigo: "V170", descricao: "CREDITOS A VENCER DE 1081 A 1440 DIAS", valor: 792267.28, meses: 48, percentual: 2.12, restritivo: "Não" },
      { codigo: "V175", descricao: "CREDITOS A VENCER DE 1441 A 1800 DIAS", valor: 773841.15, meses: 60, percentual: 2.07, restritivo: "Não" },
      { codigo: "V180", descricao: "CREDITOS A VENCER DE 1801 A 5400 DIAS", valor: 3089768.39, meses: 180, percentual: 8.28, restritivo: "Não" },
      { codigo: "V210", descricao: "CREDITOS VENCIDOS DE 15 A 30 DIAS", valor: 5522.21, meses: 1, percentual: 0.01, restritivo: "Sim" },
      { codigo: "V220", descricao: "CREDITOS VENCIDOS DE 31 A 60 DIAS", valor: 119834.83, meses: 2, percentual: 0.32, restritivo: "Sim" }
    ]
  },
  {
    modalidade: "FINANCIAMENTOS",
    descricao: "AQUISICAO DE BENS – VEICULOS AUTOMOTORES",
    total: 325277.47,
    percentual: 0.87,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 62731.00, meses: 1, percentual: 0.17, restritivo: "Não" },
      { codigo: "V120", descricao: "CREDITOS A VENCER DE 31 A 60 DIAS", valor: 5549.15, meses: 2, percentual: 0.01, restritivo: "Não" },
      { codigo: "V130", descricao: "CREDITOS A VENCER DE 61 A 90 DIAS", valor: 5549.15, meses: 3, percentual: 0.01, restritivo: "Não" },
      { codigo: "V140", descricao: "CREDITOS A VENCER DE 91 A 180 DIAS", valor: 22623.32, meses: 6, percentual: 0.06, restritivo: "Não" },
      { codigo: "V150", descricao: "CREDITOS A VENCER DE 181 A 360 DIAS", valor: 62509.60, meses: 12, percentual: 0.17, restritivo: "Não" },
      { codigo: "V160", descricao: "CREDITOS A VENCER DE 361 A 720 DIAS", valor: 97747.84, meses: 24, percentual: 0.26, restritivo: "Não" },
      { codigo: "V165", descricao: "CREDITOS A VENCER DE 721 A 1080 DIAS", valor: 68567.41, meses: 36, percentual: 0.18, restritivo: "Não" }
    ]
  },
  {
    modalidade: "FINANCIAMENTOS",
    descricao: "OUTROS FINANCIAMENTOS",
    total: 593066.51,
    percentual: 1.59,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V130", descricao: "CREDITOS A VENCER DE 61 A 90 DIAS", valor: 213450.77, meses: 3, percentual: 0.57, restritivo: "Não" },
      { codigo: "V150", descricao: "CREDITOS A VENCER DE 181 A 360 DIAS", valor: 197197.83, meses: 12, percentual: 0.53, restritivo: "Não" },
      { codigo: "V160", descricao: "CREDITOS A VENCER DE 361 A 720 DIAS", valor: 182417.91, meses: 24, percentual: 0.49, restritivo: "Não" }
    ]
  },
  {
    modalidade: "FINANCIAMENTOS RURAIS E AGROINDUSTRIAIS",
    descricao: "CUSTEIO E PRE-CUSTEIO",
    total: 13211891.82,
    percentual: 35.41,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 970124.96, meses: 1, percentual: 2.60, restritivo: "Não" },
      { codigo: "V150", descricao: "CREDITOS A VENCER DE 181 A 360 DIAS", valor: 1442063.71, meses: 12, percentual: 3.87, restritivo: "Não" },
      { codigo: "V165", descricao: "CREDITOS A VENCER DE 721 A 1080 DIAS", valor: 1442063.71, meses: 36, percentual: 3.87, restritivo: "Não" },
      { codigo: "V170", descricao: "CREDITOS A VENCER DE 1081 A 1440 DIAS", valor: 1442063.71, meses: 48, percentual: 3.87, restritivo: "Não" },
      { codigo: "V175", descricao: "CREDITOS A VENCER DE 1441 A 1800 DIAS", valor: 1442063.71, meses: 60, percentual: 3.87, restritivo: "Não" },
      { codigo: "V180", descricao: "CREDITOS A VENCER DE 1801 A 5400 DIAS", valor: 5793508.35, meses: 180, percentual: 15.53, restritivo: "Não" },
      { codigo: "V220", descricao: "CREDITOS VENCIDOS DE 31 A 60 DIAS", valor: 680003.67, meses: 2, percentual: 1.82, restritivo: "Sim" }
    ]
  },
  {
    modalidade: "FINANCIAMENTOS RURAIS E AGROINDUSTRIAIS",
    descricao: "INVESTIMENTO E CAPITAL DE GIRO DE FINANCIAM. AGROINDUSTRIA.",
    total: 7596245.24,
    percentual: 20.36,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 466786.38, meses: 1, percentual: 1.25, restritivo: "Não" },
      { codigo: "V120", descricao: "CREDITOS A VENCER DE 31 A 60 DIAS", valor: 86412.35, meses: 2, percentual: 0.23, restritivo: "Não" },
      { codigo: "V130", descricao: "CREDITOS A VENCER DE 61 A 90 DIAS", valor: 130158.74, meses: 3, percentual: 0.35, restritivo: "Não" },
      { codigo: "V140", descricao: "CREDITOS A VENCER DE 91 A 180 DIAS", valor: 215819.32, meses: 6, percentual: 0.58, restritivo: "Não" },
      { codigo: "V150", descricao: "CREDITOS A VENCER DE 181 A 360 DIAS", valor: 640520.99, meses: 12, percentual: 1.72, restritivo: "Não" },
      { codigo: "V160", descricao: "CREDITOS A VENCER DE 361 A 720 DIAS", valor: 805006.70, meses: 24, percentual: 2.16, restritivo: "Não" },
      { codigo: "V165", descricao: "CREDITOS A VENCER DE 721 A 1080 DIAS", valor: 1158075.08, meses: 36, percentual: 3.10, restritivo: "Não" },
      { codigo: "V170", descricao: "CREDITOS A VENCER DE 1081 A 1440 DIAS", valor: 849594.57, meses: 48, percentual: 2.28, restritivo: "Não" },
      { codigo: "V175", descricao: "CREDITOS A VENCER DE 1441 A 1800 DIAS", valor: 772122.93, meses: 60, percentual: 2.07, restritivo: "Não" },
      { codigo: "V180", descricao: "CREDITOS A VENCER DE 1801 A 5400 DIAS", valor: 2046698.55, meses: 180, percentual: 5.49, restritivo: "Não" },
      { codigo: "V210", descricao: "CREDITOS VENCIDOS DE 15 A 30 DIAS", valor: 90674.73, meses: 1, percentual: 0.24, restritivo: "Sim" },
      { codigo: "V220", descricao: "CREDITOS VENCIDOS DE 31 A 60 DIAS", valor: 187774.62, meses: 2, percentual: 0.50, restritivo: "Sim" },
      { codigo: "V240", descricao: "CREDITOS VENCIDOS DE 91 A 120 DIAS", valor: 146600.28, meses: 4, percentual: 0.39, restritivo: "Sim" }
    ]
  },
  {
    modalidade: "FINANCIAMENTOS RURAIS E AGROINDUSTRIAIS",
    descricao: "COMERCIALIZACAO E PRE-COMERCIALIZACAO",
    total: 7597051.24,
    percentual: 20.36,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 704337.17, meses: 1, percentual: 1.89, restritivo: "Não" },
      { codigo: "V150", descricao: "CREDITOS A VENCER DE 181 A 360 DIAS", valor: 444964.08, meses: 12, percentual: 1.19, restritivo: "Não" },
      { codigo: "V165", descricao: "CREDITOS A VENCER DE 721 A 1080 DIAS", valor: 919862.65, meses: 36, percentual: 2.47, restritivo: "Não" },
      { codigo: "V170", descricao: "CREDITOS A VENCER DE 1081 A 1440 DIAS", valor: 919862.65, meses: 48, percentual: 2.47, restritivo: "Não" },
      { codigo: "V175", descricao: "CREDITOS A VENCER DE 1441 A 1800 DIAS", valor: 919862.65, meses: 60, percentual: 2.47, restritivo: "Não" },
      { codigo: "V180", descricao: "CREDITOS A VENCER DE 1801 A 5400 DIAS", valor: 3688162.04, meses: 180, percentual: 9.89, restritivo: "Não" }
    ]
  },
  {
    modalidade: "OUTROS CREDITOS",
    descricao: "CARTAO DE CREDITO - COMPRA A VISTA E PARCELADO LOJISTA",
    total: 61365.79,
    percentual: 0.16,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V110", descricao: "CREDITOS A VENCER ATE 30 DIAS", valor: 31913.50, meses: 1, percentual: 0.09, restritivo: "Não" },
      { codigo: "V120", descricao: "CREDITOS A VENCER DE 31 A 60 DIAS", valor: 13111.13, meses: 2, percentual: 0.04, restritivo: "Não" },
      { codigo: "V130", descricao: "CREDITOS A VENCER DE 61 A 90 DIAS", valor: 8012.27, meses: 3, percentual: 0.02, restritivo: "Não" },
      { codigo: "V140", descricao: "CREDITOS A VENCER DE 91 A 180 DIAS", valor: 7621.86, meses: 6, percentual: 0.02, restritivo: "Não" },
      { codigo: "V150", descricao: "CREDITOS A VENCER DE 181 A 360 DIAS", valor: 707.03, meses: 12, percentual: 0.00, restritivo: "Não" }
    ]
  },
  {
    modalidade: "LIMITE",
    descricao: "CHEQUE ESPECIAL",
    total: 16500.00,
    percentual: 0.04,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V20", descricao: "LIMITE DE CREDITO COM VENCIMENTO ATE 360 DIAS", valor: 16500.00, meses: 12, percentual: 0.04, restritivo: "Não" },
      { codigo: "V20", descricao: "LIMITE DE CREDITO COM VENCIMENTO ATE 360 DIAS", valor: 6000.00, meses: 12, percentual: 0.02, restritivo: "Não" }
    ]
  },
  {
    modalidade: "LIMITE",
    descricao: "CARTAO DE CREDITO",
    total: 109431.47,
    percentual: 0.29,
    variacaoCambial: 0,
    detalhes: [
      { codigo: "V40", descricao: "LIMITE DE CREDITO COM VENCIMENTO ACIMA DE 360 DIAS", valor: 103431.47, meses: 12, percentual: 0.28, restritivo: "Não" }
    ]
  }
];
