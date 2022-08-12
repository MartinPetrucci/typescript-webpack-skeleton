//Responses
interface Response {
  statusCode: number;
  statusText: string;
}

export interface MovementResponse extends Response {
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
