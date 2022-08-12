import { useQuery } from "react-query";
import { getMovements } from "../axios";

const QUERIES = {
    MOVEMENTS: "MOVEMENTS"
}

export const useMovements = () => {
    const response = useQuery(QUERIES.MOVEMENTS, getMovements)
    const movements = response.data?.data || [];
    return {...response, movements}
}