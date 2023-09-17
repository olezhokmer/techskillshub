import { CategoryType, UserResponse } from "types";

export const server = 'http://localhost:3020';

export async function getProducts(
  categories?: string[],
  lowestPrice?: number,
  highestPrice?: number
) {
  const filter = {
    categories,
    lowestPrice,
    highestPrice,
  };

  const response = await fetch(server + '/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filter),
  });
  const data = await response.json();

  return data?.products ?? [];
}

export async function getProductById(
  id: string,
) {

  const response = await fetch(server + '/products/' + id, {
    method: 'GET',
  });
  const data = await response.json();

  return data?.product;
}

export async function getCategories(): Promise<CategoryType[]> {
  const response = await fetch(server + '/categories', {
    method: 'GET',
  });
  const data = await response.json();

  return data?.categories ?? [];
}

export async function login(
  email: string,
  password: string,
) : Promise<UserResponse> {
  const payload = {
    email,
    password,
  };

  const response = await fetch(server + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  return data;
}


export async function registerUser(
  email: string,
  firstName: string,
  lastName: string,
  password: string,
) : Promise<UserResponse> {
  const payload = {
    email,
    password,
    firstName,
    lastName,
  };

  const response = await fetch(server + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  return data;
}
