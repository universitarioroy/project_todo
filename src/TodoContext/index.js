import React from "react";
import {useLocalStorage} from "./useLocalStorage";
const TodoContext=React.createContext();

function TodoProvider({children}){
  const {
    Item:todo,
    saveItem:saveTodos ,
    error,
    loading
      }=useLocalStorage('TODOS_V1',[]);

  const [openModal,setOpenModal]=React.useState(false);


  const [searchValue,setSearchValue]=React.useState('');
  
  const todoCompleted=todo.filter((todo)=>{return !!todo.completed}).length;
  const totalTodo=todo.length;
  
  const TodoFilter=todo.filter((todo)=>{
    return todo.texto.toUpperCase().includes(searchValue.toUpperCase());  
  });

  const completeTodo=(texto)=>{
    const copyTodo=[...todo];
    const item=copyTodo.findIndex((todo)=>{
      return todo.texto===texto;
    });
    
    copyTodo[item].completed=true;
    saveTodos(copyTodo);
  }
  
  const deleteTodo=(texto)=>{
    const copyTodo=[...todo];
    const item=copyTodo.findIndex((todo)=>{
      return todo.texto===texto;
    });
    
    copyTodo.splice(item,1);
    saveTodos(copyTodo);
  }

  const concluido=!(todo.filter((todo)=>{
              return todo.completed===false;
            }).length >0 );
  
  const addTodo=(newTodo)=>{
      const copyTodo=[...todo];
      copyTodo.push(newTodo);
      saveTodos(copyTodo);
  }            
  
 return(
        <TodoContext.Provider value=
        {{
            totalTodo,
            todoCompleted,
            concluido,
            searchValue,
            setSearchValue,
            TodoFilter,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            { children }
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider};