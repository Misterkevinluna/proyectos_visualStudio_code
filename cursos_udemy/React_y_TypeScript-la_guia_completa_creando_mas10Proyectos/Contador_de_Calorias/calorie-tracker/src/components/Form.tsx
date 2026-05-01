import { useEffect, useState, type ChangeEvent, type Dispatch } from "react";
import { v4 as uuid } from "uuid";

import { categories } from "../data/categories";
import type { Activity } from "../types/intex";
import type { ActivityActions, ActivityState } from "../reducers/activity-reducer";

type FormProps = {
     dispatch: Dispatch<ActivityActions>;
     state: ActivityState;
};

const initialState : Activity = {
     id: uuid(),
     category: 1,
     name: '',
     calories: 0
}

export default function Form({ dispatch, state }: FormProps) {

     const [activity, setActivity] = useState<Activity>(initialState);

     useEffect(() => {
          if (!state.activeId) return;
          const selectedActivity = state.activities.find( activity => activity.id === state.activeId);

          //Le coloco este comentario para que me deje de marcar error en la linea setActivity(selectedActivity) ya que la logica y codigo esta. El warning viene por una recomendación de optimización, no porque exista un bug real.
          // eslint-disable-next-line react-hooks/set-state-in-effect
          if (selectedActivity) setActivity(selectedActivity);
     
     }, [state.activeId, state.activities]);

     
     const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
          const { id, value } = e.target;

          // Determinamos si el campo debe ser tratado como número
          const isNumberField = ["category", "calories"].includes(id);

          setActivity({
               ...activity,//aquí se el contenido del json es decir category: 1, name: papas, calories: 23 mas no la estructura con su contenido es decir {category: 1, name: papas, calories: 23}  
               //De esta forma el campo que reprecente el [id] sobreescribe su valor sobre el campo en activity, si el campo 'category' de activity tiene como valor 1 y si [id] es en el momento es el campo category y tiene como valor 2 este sobre escribe el valor 2 sobre el 1, entonces di  esta forma se sobreescriben los valores del objeto viejo.
               [id]: isNumberField ? +value : value,
          });
     };

     const isValidActivity  = ()  => {
          const { name, calories } = activity;
          return name.trim() !== '' && calories >  0
     };

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          dispatch({ type: 'save-activity', payload: { newActivity: activity } });
          setActivity({
               ...initialState,
               id: uuid()
          });//recetear el formulario con un id y category por defecto
     };

     return (
          <form className="space-y-5 bg-white shadow p-10 rounded-lg"  onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="category" className="font-bold">Categoría:</label>
                    <select 
                         className="border 
                         border-slate-300 p-2 rounded-lg w-full bg-white" 
                         id="category"
                         onChange={handleChange}
                         value={activity.category}
                    >
                         {categories.map(category => (
                              <option value={category.id} key={category.id}>
                                   {category.name}
                              </option>
                         ))}
                    </select>
               </div>
               <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="name" className="font-bold">Actividad:</label>
                    <input
                         id="name" 
                         type="text"
                         className="border border-slate-300 p-2 rounded-lg"
                         placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                         onChange={handleChange}
                         value={activity.name}
                    />
               </div>

               <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="calories" className="font-bold">Calorias:</label>
                    <input
                         id="calories" 
                         type="number"
                         className="border border-slate-300 p-2 rounded-lg"
                         placeholder="Calorias. ej. 300 o 500"
                         onChange={handleChange}
                         value={activity.calories}
                    />
               </div>

               <input
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white disabled:opacity-10 cursor-pointer"
                    value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                    disabled={!isValidActivity()}
               />
          </form>
     );
}