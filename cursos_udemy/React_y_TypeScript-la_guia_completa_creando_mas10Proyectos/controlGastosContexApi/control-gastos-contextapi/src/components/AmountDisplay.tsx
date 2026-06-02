import { formatCurrency } from "../helpers";


type AmountDisplayProps = {
  label?: string;
  amount: number;
}

export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
      {//Se imprime el label con los dos puntos en caso que le manden el label al componente
        label && `${label}: `
      }
      <span className="font-black text-black">{formatCurrency(amount)}</span>
    </p>
  )
}
