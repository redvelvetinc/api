interface IBaseProfile {
  name: string;
  birthDate: Date;
  cpf: string;
  mobile: string;
}

export interface IAccount {
  email: string;
  password: string;
  acceptedTerms: boolean;
  personalProfile: IBaseProfile;
}
