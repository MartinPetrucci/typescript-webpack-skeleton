import { useQuery } from "react-query";
import { getMovements, getTotalBalance } from "../axios";

const QUERIES = {
  MOVEMENTS: "MOVEMENTS",
  BALANCE: "BALANCE"
};

const userId = "1"

export const useMovements = () => {
  const response = useQuery(QUERIES.MOVEMENTS, getMovements(userId), {
    onError: (error) => {
      console.log(error)
    },
  });
  const movements = response.data?.data || [];
  return { ...response, movements };
};

export const useBalance = () => {
  const response = useQuery(QUERIES.BALANCE, getTotalBalance(), {
    onError: (error) => {
      console.log(error)
    },
  });
  const total = response.data?.data.total || {balance: 0, incomes: 0, expenses: 0};
  return { ...response, total };
}
