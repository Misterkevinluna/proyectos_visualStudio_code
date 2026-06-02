type ValuePiece = Date | null;
export type Value = ValuePiece | [ ValuePiece , ValuePiece ];

//Gasto
export type Expense = {
    id: string;
    expenseName: string;
    amount: number;
    category: string;
    date: Value
}

export type DrafExpense = Omit<Expense, 'id'>;//Omit, omite el atributo que le indiques del type que le pases, devolvientode un nuevo type con los demas atributos. 

export type Category = {
    id: string;
    name: string;
    icon: string;
}