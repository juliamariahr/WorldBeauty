export interface Endereco {
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    codigoPostal: string;
    informacoesAdicionais: string;
  }
  
  export interface Cliente {
    id: number;
    nome: string;
    sobreNome: string;
    email: string | null;
    endereco: {
      estado: string;
      cidade: string;
      bairro: string;
      rua: string;
      numero: string;
      codigoPostal: string;
      informacoesAdicionais: string;
    };
    telefones: Array<{ ddd: string; numero: string }>;
  }