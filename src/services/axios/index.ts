import axios from "axios";
import { MovementResponse } from "../../types";

const AUTH_TOKEN = "12345";
const BASE_URL = "https://62f67a1ea3bce3eed7c229dd.mockapi.io/finance";
const USER_ID = "1"

const authRequests = {
    get: <Response>(url: string) => axios.get<Response>(url, { headers: { Authorization: AUTH_TOKEN } }),
    post: <Response, Body>(url: string, body: Body) => axios.post<Response>(url, body, { headers: { Authorization: AUTH_TOKEN } }),
}

export const getMovements = () => {
    return authRequests.get<MovementResponse>(`${BASE_URL}/Prueba/${USER_ID}`);
}