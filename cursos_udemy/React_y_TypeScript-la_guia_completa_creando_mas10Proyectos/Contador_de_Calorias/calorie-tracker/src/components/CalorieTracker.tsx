import { useMemo } from "react";
import type { Activity } from "../types/intex";
import CalorieDisplay from "./CalorieDisplay";

type CalorieTrackerProps = {
     activities: Activity[];
}

export default function CalorieTracker({ activities }: CalorieTrackerProps) {

     //Contador de calorias consumidas
     const caloriesConsumed = useMemo( () => activities.reduce( (total, activity) => activity.category === 1
     ? total + activity.calories : total, 0), [activities] );

     //Contador de calorias quemadas
     const caloriesBurned = useMemo( () => activities.reduce( (total, activity) => activity.category === 2
     ? total + activity.calories : total, 0), [activities] );

     //Calorias totales
     const netCalories = caloriesConsumed - caloriesBurned;

     return (
          <>
               <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
               <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                    <CalorieDisplay 
                         calories={caloriesConsumed}
                         text="Consumidas"
                    />

                    <CalorieDisplay 
                         calories={caloriesBurned}
                         text="Quemadas"
                    />

                    <CalorieDisplay 
                         calories={netCalories}
                         text="Restantes"
                    />
               </div>
          </>
     );
}