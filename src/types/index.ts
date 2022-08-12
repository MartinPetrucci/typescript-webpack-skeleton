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
    }
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
  concept: concepts;
}

export enum concepts {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}
