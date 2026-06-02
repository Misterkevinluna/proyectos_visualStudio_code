import { useMemo } from "react";
import AmountDisplay from "./AmountDisplay";
import {                                      //-|
    LeadingActions,                           //-|
    SwipeableList,                            //-|
    SwipeableListItem,                        //-|
    SwipeAction,                              //-| Es necesario importar todo esto para el uso de swipeable-list
    TrailingActions,                          //-|
} from 'react-swipeable-list';                //-|
import 'react-swipeable-list/dist/styles.css';//-|

/*___________________________________________________________________________________________________________________*/

import { formatDate } from "../helpers";
import type { Expense } from "../types"
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

/*___________________________________________________________________________________________________________________*/

type ExpenseDetailProps = {
    expense: Expense;
}

/*___________________________________________________________________________________________________________________*/


export default function ExpenseDetail({ expense }: ExpenseDetailProps) {

    const categoryInfo = useMemo(() => categories.filter(category => category.id === expense.category)[0], [expense]);

    const { dispatch } = useBudget();

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => dispatch({ type: 'get-expense-by-id', payload: { id: expense.id } })}>
                Actualizar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => dispatch({ type: 'remove-expense', payload: { id: expense.id } })}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )


    return (
        <SwipeableList>
            <SwipeableListItem
                maxSwipe={1}//Los pixeles que queremos deslizar para mostrar las acciones
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="bg-white shadow-lg p-5 w-full border-b border-gray-200 flex gap-5 items-center">
                    <div>
                        <img src={`/icono_${categoryInfo.icon}.svg`} alt="icono gasto" className="w-20" />
                    </div>

                    <div className="flex-1 space-y-3">
                        <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
                        <p>{expense.expenseName}</p>
                        {/*Se le coloca el signo '!' para indicarle que el valor que esperamos en expense.date si va a existir*/}
                        <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
                    </div>

                    <AmountDisplay
                        amount={expense.amount}
                    />
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
