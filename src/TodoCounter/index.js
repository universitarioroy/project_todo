import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter(){
    const {
        totalTodo,
        todoCompleted,
        concluido
    }=React.useContext(TodoContext);

    let out;
    if(concluido){
        out=<h1 className="todoCounter">Haz completado todo los TODOS</h1>
    }else{
        out=<h1 className="todoCounter">Haz completado <span> {todoCompleted}</span> de <span>{totalTodo}</span> TODOS</h1>
    }
    return(out);
}

export {TodoCounter}