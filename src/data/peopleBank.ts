import { DadosCadastrais, Localizacao, HistoricoEndereco, HistoricoTelefone } from "../types";

export interface Person {
  id: number;
  dadosCadastrais: DadosCadastrais;
  localizacao: Localizacao;
  historicoEnderecos: HistoricoEndereco[];
  historicoTelefones: HistoricoTelefone[];
}

export const PEOPLE_BANK: Person[] = [
  {
    id: 1,
    dadosCadastrais: {
      nome: "João da Silva",
      situacaoCpf: "Regular",
      cpf: "999.999.999-99",
      dataNascimento: "15/05/1980",
      idade: "46 anos e 2 meses",
      nomeMae: "MARIA DA SILVA",
      origemCpf: "SÃO PAULO (SP)",
      sexo: "MASCULINO",
      telefone: "(11) 98765-4321"
    },
    localizacao: {
      endereco: "AVENIDA PAULISTA, Nº 1000, APTO 12, COMPLEMENTO B",
      bairro: "BELA VISTA",
      cep: "01310-100",
      cidade: "SÃO PAULO",
      uf: "SP"
    },
    historicoEnderecos: [
      {
        endereco: "AVENIDA PAULISTA",
        numero: "1000",
        complemento: "APTO 12",
        bairro: "BELA VISTA",
        cidadeUf: "SÃO PAULO/SP",
        cep: "01310100"
      },
      {
        endereco: "RUA AUGUSTA",
        numero: "450",
        complemento: "BLOCO C",
        bairro: "CONSOLAÇÃO",
        cidadeUf: "SÃO PAULO/SP",
        cep: "01304000"
      }
    ],
    historicoTelefones: [
      { ddd: "(11)", numero: "987654321", tipo: "TELEFONE MÓVEL" },
      { ddd: "(11)", numero: "32514090", tipo: "TELEFONE RESIDENCIAL" }
    ]
  },
  {
    id: 2,
    dadosCadastrais: {
      nome: "Maria Oliveira Souza",
      situacaoCpf: "Regular",
      cpf: "111.222.333-44",
      dataNascimento: "02/10/1975",
      idade: "50 anos e 9 meses",
      nomeMae: "FRANCISCA OLIVEIRA SOUZA",
      origemCpf: "MINAS GERAIS (MG)",
      sexo: "FEMININO",
      telefone: "(31) 99122-3344"
    },
    localizacao: {
      endereco: "RUA DA BAHIA, Nº 1500, COMPLEMENTO C",
      bairro: "LOURDES",
      cep: "30160-011",
      cidade: "BELO HORIZONTE",
      uf: "MG"
    },
    historicoEnderecos: [
      {
        endereco: "RUA DA BAHIA",
        numero: "1500",
        complemento: "C",
        bairro: "LOURDES",
        cidadeUf: "BELO HORIZONTE/MG",
        cep: "30160011"
      },
      {
        endereco: "AVENIDA AFONSO PENA",
        numero: "2100",
        complemento: "-",
        bairro: "CENTRO",
        cidadeUf: "BELO HORIZONTE/MG",
        cep: "30130005"
      }
    ],
    historicoTelefones: [
      { ddd: "(31)", numero: "991223344", tipo: "TELEFONE MÓVEL" },
      { ddd: "(31)", numero: "34415566", tipo: "TELEFONE RESIDENCIAL" }
    ]
  },
  {
    id: 3,
    dadosCadastrais: {
      nome: "Pedro Santos Alencar",
      situacaoCpf: "Regular",
      cpf: "555.666.777-88",
      dataNascimento: "24/07/1988",
      idade: "37 anos e 11 meses",
      nomeMae: "TEREZA SANTOS ALENCAR",
      origemCpf: "BAHIA (BA)",
      sexo: "MASCULINO",
      telefone: "(71) 98877-6655"
    },
    localizacao: {
      endereco: "AVENIDA OCEÂNICA, Nº 450",
      bairro: "BARRA",
      cep: "40140-130",
      cidade: "SALVADOR",
      uf: "BA"
    },
    historicoEnderecos: [
      {
        endereco: "AVENIDA OCEÂNICA",
        numero: "450",
        complemento: "-",
        bairro: "BARRA",
        cidadeUf: "SALVADOR/BA",
        cep: "40140130"
      },
      {
        endereco: "RUA CHILE",
        numero: "15",
        complemento: "SL 204",
        bairro: "CENTRO",
        cidadeUf: "SALVADOR/BA",
        cep: "40020000"
      }
    ],
    historicoTelefones: [
      { ddd: "(71)", numero: "988776655", tipo: "TELEFONE MÓVEL" },
      { ddd: "(71)", numero: "32408990", tipo: "TELEFONE RESIDENCIAL" }
    ]
  },
  {
    id: 4,
    dadosCadastrais: {
      nome: "Ana Beatriz Lima",
      situacaoCpf: "Regular",
      cpf: "222.333.444-55",
      dataNascimento: "12/03/1992",
      idade: "34 anos e 4 meses",
      nomeMae: "CARLA BEATRIZ LIMA",
      origemCpf: "PARANÁ (PR)",
      sexo: "FEMININO",
      telefone: "(41) 99555-1234"
    },
    localizacao: {
      endereco: "RUA XV DE NOVEMBRO, Nº 200",
      bairro: "CENTRO",
      cep: "80020-300",
      cidade: "CURITIBA",
      uf: "PR"
    },
    historicoEnderecos: [
      {
        endereco: "RUA XV DE NOVEMBRO",
        numero: "200",
        complemento: "-",
        bairro: "CENTRO",
        cidadeUf: "CURITIBA/PR",
        cep: "80020300"
      },
      {
        endereco: "AVENIDA SETE DE SETEMBRO",
        numero: "3500",
        complemento: "APTO 81",
        bairro: "BATEL",
        cidadeUf: "CURITIBA/PR",
        cep: "80250085"
      }
    ],
    historicoTelefones: [
      { ddd: "(41)", numero: "995551234", tipo: "TELEFONE MÓVEL" },
      { ddd: "(41)", numero: "33245678", tipo: "TELEFONE RESIDENCIAL" }
    ]
  },
  {
    id: 5,
    dadosCadastrais: {
      nome: "Carlos Henrique Fonseca",
      situacaoCpf: "Regular",
      cpf: "777.888.999-00",
      dataNascimento: "30/08/1965",
      idade: "60 anos e 10 meses",
      nomeMae: "HELENA HENRIQUE FONSECA",
      origemCpf: "RIO DE JANEIRO (RJ)",
      sexo: "MASCULINO",
      telefone: "(21) 97100-8800"
    },
    localizacao: {
      endereco: "AVENIDA ATLÂNTICA, Nº 2500, COBERTURA",
      bairro: "COPACABANA",
      cep: "22070-000",
      cidade: "RIO DE JANEIRO",
      uf: "RJ"
    },
    historicoEnderecos: [
      {
        endereco: "AVENIDA ATLÂNTICA",
        numero: "2500",
        complemento: "COB",
        bairro: "COPACABANA",
        cidadeUf: "RIO DE JANEIRO/RJ",
        cep: "22070000"
      },
      {
        endereco: "RUA BARATA RIBEIRO",
        numero: "512",
        complemento: "APTO 401",
        bairro: "COPACABANA",
        cidadeUf: "RIO DE JANEIRO/RJ",
        cep: "22040002"
      }
    ],
    historicoTelefones: [
      { ddd: "(21)", numero: "971008800", tipo: "TELEFONE MÓVEL" },
      { ddd: "(21)", numero: "22554433", tipo: "TELEFONE RESIDENCIAL" }
    ]
  },
  {
    id: 6,
    dadosCadastrais: {
      nome: "Juliana Mendes Costa",
      situacaoCpf: "Regular",
      cpf: "444.555.666-77",
      dataNascimento: "18/11/1985",
      idade: "40 anos e 8 meses",
      nomeMae: "BEATRIZ MENDES COSTA",
      origemCpf: "RIO GRANDE DO SUL (RS)",
      sexo: "FEMININO",
      telefone: "(51) 98211-5544"
    },
    localizacao: {
      endereco: "RUA DOS ANDRADAS, Nº 800",
      bairro: "CENTRO HISTÓRICO",
      cep: "90020-004",
      cidade: "PORTO ALEGRE",
      uf: "RS"
    },
    historicoEnderecos: [
      {
        endereco: "RUA DOS ANDRADAS",
        numero: "800",
        complemento: "-",
        bairro: "CENTRO HISTÓRICO",
        cidadeUf: "PORTO ALEGRE/RS",
        cep: "90020004"
      }
    ],
    historicoTelefones: [
      { ddd: "(51)", numero: "982115544", tipo: "TELEFONE MÓVEL" }
    ]
  },
  {
    id: 7,
    dadosCadastrais: {
      nome: "Lucas Ferreira Lima",
      situacaoCpf: "Regular",
      cpf: "888.999.111-22",
      dataNascimento: "05/01/1995",
      idade: "31 anos e 6 meses",
      nomeMae: "SÔNIA FERREIRA LIMA",
      origemCpf: "CEARÁ (CE)",
      sexo: "MASCULINO",
      telefone: "(85) 99188-7766"
    },
    localizacao: {
      endereco: "RUA PINTO MADEIRA, Nº 120",
      bairro: "ALDEOTA",
      cep: "60150-150",
      cidade: "FORTALEZA",
      uf: "CE"
    },
    historicoEnderecos: [
      {
        endereco: "RUA PINTO MADEIRA",
        numero: "120",
        complemento: "-",
        bairro: "ALDEOTA",
        cidadeUf: "FORTALEZA/CE",
        cep: "60150150"
      }
    ],
    historicoTelefones: [
      { ddd: "(85)", numero: "991887766", tipo: "TELEFONE MÓVEL" }
    ]
  },
  {
    id: 8,
    dadosCadastrais: {
      nome: "Camila Rodrigues Neves",
      situacaoCpf: "Regular",
      cpf: "333.444.555-66",
      dataNascimento: "09/04/1990",
      idade: "36 anos e 3 meses",
      nomeMae: "REGINA RODRIGUES NEVES",
      origemCpf: "DISTRITO FEDERAL (DF)",
      sexo: "FEMININO",
      telefone: "(61) 98555-9988"
    },
    localizacao: {
      endereco: "SCLN 204, BLOCO B, APTO 301",
      bairro: "ASA NORTE",
      cep: "70842-520",
      cidade: "BRASÍLIA",
      uf: "DF"
    },
    historicoEnderecos: [
      {
        endereco: "SCLN 204",
        numero: "BLOCO B",
        complemento: "APTO 301",
        bairro: "ASA NORTE",
        cidadeUf: "BRASÍLIA/DF",
        cep: "70842520"
      }
    ],
    historicoTelefones: [
      { ddd: "(61)", numero: "985559988", tipo: "TELEFONE MÓVEL" }
    ]
  },
  {
    id: 9,
    dadosCadastrais: {
      nome: "Roberto de Souza Cruz",
      situacaoCpf: "Regular",
      cpf: "666.777.888-99",
      dataNascimento: "14/12/1971",
      idade: "54 anos e 7 meses",
      nomeMae: "MARLY DE SOUZA CRUZ",
      origemCpf: "GOIÁS (GO)",
      sexo: "MASCULINO",
      telefone: "(62) 99222-1100"
    },
    localizacao: {
      endereco: "AVENIDA T-63, Nº 140",
      bairro: "SETOR BUENO",
      cep: "74210-260",
      cidade: "GOIÂNIA",
      uf: "GO"
    },
    historicoEnderecos: [
      {
        endereco: "AVENIDA T-63",
        numero: "140",
        complemento: "-",
        bairro: "SETOR BUENO",
        cidadeUf: "GOIÂNIA/GO",
        cep: "74210260"
      }
    ],
    historicoTelefones: [
      { ddd: "(62)", numero: "992221100", tipo: "TELEFONE MÓVEL" }
    ]
  },
  {
    id: 10,
    dadosCadastrais: {
      nome: "Patricia Vieira Rocha",
      situacaoCpf: "Regular",
      cpf: "123.456.789-00",
      dataNascimento: "25/06/1983",
      idade: "43 anos e 1 mês",
      nomeMae: "ALICE VIEIRA ROCHA",
      origemCpf: "SANTA CATARINA (SC)",
      sexo: "FEMININO",
      telefone: "(48) 98844-3322"
    },
    localizacao: {
      endereco: "AVENIDA BEIRA MAR NORTE, Nº 3000, COMPLEMENTO D",
      bairro: "CENTRO",
      cep: "88015-700",
      cidade: "FLORIANÓPOLIS",
      uf: "SC"
    },
    historicoEnderecos: [
      {
        endereco: "AVENIDA BEIRA MAR NORTE",
        numero: "3000",
        complemento: "D",
        bairro: "CENTRO",
        cidadeUf: "FLORIANÓPOLIS/SC",
        cep: "88015700"
      }
    ],
    historicoTelefones: [
      { ddd: "(48)", numero: "988443322", tipo: "TELEFONE MÓVEL" }
    ]
  }
];
