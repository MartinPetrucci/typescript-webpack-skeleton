import { useState } from "react";
import styles from "./month.module.scss";
import "./month.module.scss";
import cn from "classnames";
import { expenses, incomes } from "../../mock/movements";
import { Movement } from "../../types";


//TODO: acomodar el scss
export const Month = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const renderMovements = (movements: Movement[], type: string) => {
    return (
      <div className={styles.movements}>
        <span className={styles.title}>Ingresos</span>
        {movements.map((income: Movement) => (
          <div key={income.id} className={styles.movement}>
            <span>{income.concept}</span>
            <span>${income.amount}</span>
          </div>
        ))}
        <div className={cn(styles.movement, styles.total)}>
          <span>Total</span>
          <span>$3.712,86</span>
        </div>
        <button className={styles.add}>Agregar {type}</button>
      </div>
    );
  };

  return (
    <div className={styles.month}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span>Agosto 2022</span>
          <span className={styles.divider}> · </span>
          <span>$34.504,45</span>
        </div>
        <div>
          <span
            className={cn(styles.toggle, open && styles.open)}
            onClick={toggle}
            style={{ fontSize: "2rem" }}
          >
            {open ? "-" : "+"}
          </span>
        </div>
      </div>
      <hr />
      <div className={cn(styles.body, open && styles.open)}>
        <div className={cn(styles.details, styles.incomes)}>
          {/* Revisar que hay un div de mas
              Evaluar si poner el boton al final del contenedor
          */}
          {renderMovements(incomes, "ingreso")}
        </div>
        <div className={cn(styles.details, styles.expenses)}>
          {renderMovements(expenses, "gasto")}
        </div>
      </div>
    </div>
  );
};
