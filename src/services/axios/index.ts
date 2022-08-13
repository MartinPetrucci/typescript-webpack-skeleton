import axios from "axios";
import {
  BalanceResponse,
  BaseResponse,
  LoginBody,
  LoginResponse,
  Movement,
  MovementsResponse,
  RegisterBody,
  TotalBalanceResponse,
} from "../../types";

const AUTH_TOKEN = "12345";
// const BASE_URL = "https://62f67a1ea3bce3eed7c229dd.mockapi.io/finance";
const BASE_URL = "http://localhost:3001";

const USER_ID = "1";

//Reemplazar por httpOnly cookie
const config = { headers: { Authorization: AUTH_TOKEN } };
const requestMethods = {
  get: <Response>(url: string, reqAuth?: boolean) => {
    return axios.get<Response>(`${BASE_URL}${url}`, reqAuth ? config : {});
  },
  post: <Response, Body>(url: string, body: Body, reqAuth?: boolean) => {
    return axios.post<Response>(`${BASE_URL}${url}`, body, reqAuth ? config : {});
  },
  update: <Response, Body>(url: string, body: Body) => {
    return axios.put<Response>(`${BASE_URL}${url}`, body, config);
  },
  delete: <Response>(url: string) => {
    return axios.delete<Response>(`${BASE_URL}${url}`, config);
  },
};
export const register = (body: RegisterBody) => () => {
  return requestMethods.post<BaseResponse, RegisterBody>(`/register`, body);
};
export const login = (body: LoginBody) => () => {
  return requestMethods.post<LoginResponse, LoginBody>(`/login`, body);
};
export const getMovements = (userId: string) => () => {
  return requestMethods.get<MovementsResponse>(`/movements/${userId}`, true);
};
export const addMovement = (movement: Movement) => () => {
  return requestMethods.post<BaseResponse, Movement>(
    `/movements/${USER_ID}`,
    movement,
    true
  );
};
export const deleteMovement = (movementId: string) => () => {
  return requestMethods.delete<BaseResponse>(`/movement/${movementId}`);
};
export const updateMovement = (movementId: string, movement: Movement) => () => {
    return requestMethods.update<BaseResponse, Movement>(`/movement/${movementId}`, movement)
}
//Es necesario crear un endpoint para obtener 1 movimiento en particular?

export const getTotalBalance = () => () => {
  return requestMethods.get<TotalBalanceResponse>(`/balance`)
}
