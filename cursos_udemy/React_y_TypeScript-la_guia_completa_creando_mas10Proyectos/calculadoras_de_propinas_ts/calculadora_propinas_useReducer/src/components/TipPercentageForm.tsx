import type { ActionDispatch } from "react";
import type { OrderActions } from "../reducer/order-reducer";

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFromProps = {
  dispatch: ActionDispatch<[action: OrderActions]>;
  tip: number;
};

export default function TipPercentageForm({ dispatch, tip }: TipPercentageFromProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input 
              type="radio"
              id={tipOption.id}
              name="tip"
              value={tipOption.value} 
              onChange={e  => dispatch({ type: 'add-tip', payload: { value: +e.target.value } })}//El + antes de la e.target.value es  para convertir el valor  de  e.target.value en un entero
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
