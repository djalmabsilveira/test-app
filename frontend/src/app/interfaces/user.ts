export interface User {
  id?: string;
  email: string;
  fullName: string;
  userName: string;
  password?: string;
  address: string;
}

export interface LoginUser {
  userName: string;
  password: string;
}

export interface UserData {
  email: string;
  fullName: string;
  address: string;
}
