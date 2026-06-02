import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';//-|
import "react-calendar/dist/Calendar.css";//-|Se necesitan de estas 3 importaciones para darle una mejor apariencia al calendario de tipo DatePicker
import "react-date-picker/dist/DatePicker.css";//-|
import { useState, type SubmitEvent, type ChangeEvent, useEffect } from "react";
import type { DrafExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";


export default function ExpenseForm() {

     const [expense, setExpense] = useState<DrafExpense>({
          expenseName: '',
          amount: 0,
          category: '',
          date: new Date()
     });
     const { dispatch, state, remainingBudget } = useBudget();
     const [error, setError] = useState('');
     //Monto del gasto actual. Este estado guarda el monto del gasto actual antes de que que lo actualice. 
     const [previousAmount, setPreviousAmount] = useState(0);

     useEffect(() => {
          if (!state.editingId) return;
          const editingExpense = state.expenses.filter(currentExpense => currentExpense.id === state.editingId)[0];

          if (editingExpense) {
               //Le coloco este comentario para que me deje de marcar error en la linea setExpense(editingExpense) ya que la logica y codigo esta bien. El warning viene por una recomendación de optimización, no porque exista un bug real.
               // eslint-disable-next-line react-hooks/set-state-in-effect
               setExpense(editingExpense);
               setPreviousAmount(editingExpense.amount);
          }
     }, [state.editingId]);

     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          //capturamos el name y el value del input o select en el que se encuentran cituados ingresando datos
          const { name, value } = e.target;
          //validamos que el input cituado sea el del name 'amount' para transformar su valor en un entero o numero
          const isAmountField = ['amount'].includes(name);//devuelve true o false
          setExpense({
               ...expense,
               [name]: isAmountField ? Number(value) : value,//en caso que sea el input 'amount' se ingresa su valor tranformado en un entero sino se ingresa el valor como venga ya que os otros valores son string y fechas
          });
     };

     const handleChangeDate = (value: Value) => {
          setExpense({
               ...expense,
               date: value
          });
     };

     const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();

          //valida si alguno de los campos del json expense vienen vacios o no se ingreso nada
          if (Object.values(expense).includes('')) {
               setError('Todos los campos son obligatorios');
               return;
          }

          //Validar que no me pase del limete. Primero se resta el monto delgasto que estaba antes de actualizarce para que al actualilzarlo el estado no lo detecte como un nuevo gasto y valla a quitarlo del disponible sabiendo que solo debe de sustituirlo.
          //Y si es un nuevo gasto igual la resta se estaria haciendo por 0 y no daria nada, solo se compararia el monto del nuevo gasto con el disponible.
          if ((expense.amount - previousAmount) > remainingBudget) {
               setError('Ese gasto se sale del presupuesto');
               return;
          }

          //Agregar un nuevo gasto o actualizarlo
          //El error lo marca porque segun la extención ESlint la forma de ejecutar esatas lineas con terniarios es mala practica, que es mejor usar el if y else
          (state.editingId)
               ? dispatch({ type: 'update-expense', payload: { expense: { id: state.editingId, ...expense } } })
               : dispatch({ type: 'add-expense', payload: { expense } });

          //Recetear el formulario luego de agregar un gasto.
          setExpense({
               expenseName: '',
               amount: 0,
               category: '',
               date: new Date()
          });
          setPreviousAmount(0);
     };

     return (
          <form className="space-y-5" onSubmit={handleSubmit}>
               <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500">{!state.editingId ? "Nuevo Gasto" : "Actualización de Gasto"}</legend>

               {error && <ErrorMessage>{error}</ErrorMessage>}

               <div className="flex flex-col gap-2">
                    <label htmlFor="expenseName" className="text-xl">Nombre Gasto:</label>
                    <input type="text"
                         id="expenseName"
                         placeholder="Añade el nombre del gasto"
                         className="bg-slate-100 p-2"
                         name="expenseName"
                         value={expense.expenseName}
                         onChange={handleChange}
                    />
               </div>

               <div className="flex flex-col gap-2">
                    <label htmlFor="amount" className="text-xl">Cantidad:</label>
                    <input
                         type="number"
                         id="amount"
                         placeholder="Añade la cantidad del gasto: ej. 300"
                         className="bg-slate-100 p-2"
                         name="amount"
                         value={expense.amount}
                         onChange={handleChange}
                    />
               </div>

               <div className="flex flex-col gap-2">
                    <label htmlFor="category" className="text-xl">Categoría:</label>
                    <select
                         id="category"
                         className="bg-slate-100 p-2"
                         name="category"
                         value={expense.category}
                         onChange={handleChange}
                    >
                         <option value="">-- Seleccione --</option>
                         {categories.map(category => (
                              <option key={category.id} value={category.id}>
                                   {category.name}
                              </option>
                         ))}
                    </select>
               </div>

               <div className="flex flex-col gap-2">
                    <label htmlFor="expenseDate" className="text-xl">Fecha Gasto:</label>
                    <DatePicker
                         className="bg-slate-100 p-2 border-0"
                         value={expense.date}
                         onChange={handleChangeDate}
                    />
               </div>

               <input
                    type="submit"
                    className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                    value={!state.editingId ? "Registrar Gastos" : "Guardar Cambios"}
               />
          </form>
     )
}
