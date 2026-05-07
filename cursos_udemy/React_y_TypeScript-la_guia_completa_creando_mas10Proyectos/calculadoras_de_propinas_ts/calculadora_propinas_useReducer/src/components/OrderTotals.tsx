import { useMemo, type ActionDispatch } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import type { OrderActions } from "../reducer/order-reducer";

type OrderTotalsProps = {
    order: OrderItem[];
    tip: number;
    dispatch: ActionDispatch<[action: OrderActions]>;
};

export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {

    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
    const  tipAmount = subTotalAmount * tip;
    const  totalAmount = tipAmount + subTotalAmount;

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subTotalAmount) }</span>
            </p>

            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>

            <p>Total a Pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>
        <button
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
            disabled={totalAmount === 0}
            onClick={ () => dispatch({ type: 'place-order' }) }
        >
            Guardar Orden
        </button>
    </>
  )
}
