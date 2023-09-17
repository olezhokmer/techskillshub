

export type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: string;
  description: string;
  images: string[];
  discount?: string;
  currentPrice: number;
}

export type ProductTypeList = {
  id: string;
  name: string;
  price: string;
  images: string[];
  discount?: string;
  currentPrice?: number;
}

export type ProductStoreType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
}

export type CategoryType = {
  id: string,
  name: string,
}

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export type UserResponse = {
  user: UserType;
  token: string;
}