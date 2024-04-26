import { useEffect, useState } from "react";
import { moneyFormat } from "./helpers";


export const Balance = ({ count, subs, spent, setSpent }) => {

  const updateBalance = () => {
    const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
    setSpent(spent);
  };

  useEffect(() => {
    updateBalance();
  }, [subs]);

  return (
    <>
      <div className="balance">
        <h3 className="">Presupuesto: {moneyFormat(count)}</h3>
        <h3 className="">Disponible: {moneyFormat(count - spent)}</h3>
        <h3 className="">Gastado: {moneyFormat(spent)}</h3>
      </div>
    </>
  );
};
