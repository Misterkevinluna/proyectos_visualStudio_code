import type { Request, Response } from 'express';
import { todo } from 'node:test';


const todos = [
    { id: 1, text: 'Buy milk', completedAt: new Date() },
    { id: 2, text: 'Buy bread', completedAt: null },
    { id: 3, text: 'Buy butter', completedAt: new Date() },
]

export class TodosController {
    //*DI
    constructor(){}

    public getTodos = (req: Request, res: Response) => {
        return res.json(todos);
    };

    public getTodoById = (req: Request, res: Response) => {
        const idParam = req.params.id;
        if (!idParam) return res.status(400).json({ error: 'ID parameter is missing' });
        const id = +idParam;
        if( isNaN(id) ) return res.status(400).json({ error: 'ID argument is not a number' });
        const todo = todos.find( todo => todo.id === id );
        ( todo )
        ? res.json(todo)
        : res.status(404).json( { error: `TODO with id ${ id } not found` } );
    };

    public createTodo = ( req: Request, res: Response ) => {
        const { text } =  req.body;
        if ( !text ) return res.status( 400 ).json( { error: 'Text property is requiret' } );
        const newTodo = {
            id: todos.length + 1,
            text: text,
            completedAt: null
        }
        todos.push( newTodo );
        res.json( newTodo );
    };

    public updateTodo = ( req: Request, res: Response ) => {
        const idParam = req.params.id;
        if (!idParam) return res.status(400).json({ error: 'ID parameter is missing' });
        const id = +idParam;
        if( isNaN(id) ) return res.status(400).json({ error: 'ID argument is not a number' });

        const todo = todos.find( todo => todo.id === id);
        if ( !todo ) return res.status( 404 ).json( { error: `Todo with id ${ id } not found.` } );
        
        const { text, completedAt } = req.body;
        todo.text = text || todo.text;
        ( completedAt === 'null' )
        ? todo.completedAt = null
        : todo.completedAt = new Date( completedAt || todo.completedAt );

        res.json( todo );
    };

    public deleteTodo = ( req: Request, res: Response ) => {
        const idParam = req.params.id;
        if (!idParam) return res.status(400).json({ error: 'ID parameter is missing' });
        const id = +idParam;
        if( isNaN(id) ) return res.status(400).json({ error: 'ID argument is not a number' });
        const indexTodo = todos.findIndex( todo => todo.id === id );
        if ( indexTodo < 0 ) return res.status( 404 ).json( { error: `Todo with id ${ id } not found.` } );
        const eliminado = todos.splice(indexTodo, 2); // Elimina el elemento
        res.json({ message: 'Todo deleted', deletedTodo: eliminado[0] });//[0] porque apenas se elimino un elemento y ese elemento esta en la posición 0, si en .splice como segundo parametro le colocaramos 2 (todos.splice(indexTodo, 2)) este eliminaría el correspondiente al index y el que le sigue de forma decendente y ya habria mas de una posición porque fue mas de un objeto que se eliminó.
    };
};