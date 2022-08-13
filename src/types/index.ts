//Responses
export interface BaseResponse {
  statusCode: number;
  statusText: string;
}

export interface LoginResponse extends BaseResponse {
  data: {
    authToken: string;
    username: string;
    fullName: string;
    userId: string;
    email: string;
  };
}

export interface LoginBody {
  username: string;
  password: string;
}

export interface RegisterBody {
  username: string;
  password: string;
  fullName: string;
  email: string;
}

export interface MovementsResponse extends BaseResponse {
  data: Movement[];
}

export interface Movement {
  id: number;
  movementType: movementType;
  amount: number;
  date: string;
  concept: string;
}

export interface TotalBalanceResponse {
    total: Balance;
    monthsBalance: MonthlyBalance[]
}

export interface Balance {
  balance: number;
  incomes: number;
  expenses: number;
}

export interface MonthlyBalance extends Balance {
  since: string;
  until: string;
}

export enum movementType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}
