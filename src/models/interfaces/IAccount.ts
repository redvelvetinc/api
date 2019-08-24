enum AccountTypes {
  ADMIN = 'ADMIN',
  AGENCY = 'AGENCY',
  SINGLE = 'SINGLE',
}

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
  accountType: AccountTypes;
  isEmailVerified: boolean;
  token: string;
  personalProfile: IBaseProfile;
}
