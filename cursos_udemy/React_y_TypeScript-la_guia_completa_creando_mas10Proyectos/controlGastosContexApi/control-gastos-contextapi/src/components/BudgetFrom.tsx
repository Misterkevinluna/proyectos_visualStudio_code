import { useMemo, useState, type ChangeEvent } from "react"
import { useBudget } from "../hooks/useBudget";

export default function BudgetFrom() {

     const [budget, setBudget] = useState(0);
     const { dispatch } = useBudget();

     const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
          setBudget(e.target.valueAsNumber);
          console.log(budget);
     }

     const isValid = useMemo(() => {
          return isNaN(budget) || budget <= 0
     }, [budget]);
     const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          dispatch({ type: 'add-budget', payload: { budget } });
     };


     return (
          <form className="space-y-5" onSubmit={handlesubmit}>
               <div>
                    <label htmlFor="butget" className="text-4xl text-blue-600 font-bold text-center">
                         Definir Presupuesto
                    </label>
                    <input
                         id="butgetId"
                         type="number"
                         className="w-full bg-white border border-gray-200 p-2"
                         placeholder="Define tu presupuesto"
                         name="burget"
                         value={budget}
                         onChange={handleChange}
                    />
               </div>
               <input
                    type="submit"
                    value='Definir Presupusto'
                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase
          disabled:opacity-40"
                    disabled={isValid}
               />
          </form>
     )
}
