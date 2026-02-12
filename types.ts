
export interface Medicine {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  requiresPrescription: boolean;
  description: string;
  usage: string;
  sideEffects: string;
}

export interface CartItem {
  medicine: Medicine;
  quantity: number;
}

export interface User {
  username: string;
  email: string;
  password?: string;
}

export enum View {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  CHECKOUT = 'CHECKOUT',
  SUCCESS = 'SUCCESS'
}
