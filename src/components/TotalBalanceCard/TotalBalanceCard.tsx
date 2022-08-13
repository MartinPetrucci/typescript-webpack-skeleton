import axios from "axios";
import { getTotalBalance } from "../../services/axios";
import { useBalance } from "../../services/queries";
import { TotalBalanceResponse } from "../../types";
import styles from "./total.module.scss";

interface Props {
  total: number;
}

export const TotalBalanceCard = ({ total }: Props) => {

  

  // const handle = () => {
  //   console.log("aaa");
  //   // axios.get<TotalBalanceResponse>("http://localhost:3001/balance").then((res) => {
  //   //   console.log(res.data.total);
  //   // });
  //   const fun = getTotalBalance();
  //   fun().then((res) => console.log(res));
  // };

  return (
    <div className={styles.card}>
      <div className={styles.balance}>
        <span>Balance actual</span>
        <span>${total}</span>
      </div>
      <div className={styles["add-buttons"]}>
        <button
          className={`${styles["add-button"]} ${styles.income} `}
        >
          Agregar ingreso
        </button>
        <button className={`${styles["add-button"]} ${styles.expense} `}>
          Agregar gasto
        </button>
      </div>
    </div>
  );
};
