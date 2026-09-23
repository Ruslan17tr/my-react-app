export interface IProfile {
  name: string;
  surname: string;
  email: string;
  favorites: string[];
}

export interface AuthInfo {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  surename: string;
}

export interface SuccessfulResult {
  result: boolean;
}