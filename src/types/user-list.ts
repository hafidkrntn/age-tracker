interface Coordinates {
  lat: number;
  lng: number;
}

interface Address {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

interface Hair {
  color: string;
  type: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface CompanyAddress {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

interface Company {
  address: CompanyAddress;
  department: string;
  name: string;
  title: string;
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: number;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
};

export type UserList = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
