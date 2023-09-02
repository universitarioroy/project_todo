
import React from 'react';
import {AppUI} from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  return(
    <TodoProvider>
       <AppUI 
          // totalTodo={totalTodo}
          // todoCompleted={todoCompleted}
          // concluido={concluido}
          // searchValue={searchValue}
          // setSearchValue={setSearchValue}
          // TodoFilter={TodoFilter}
          // completeTodo={completeTodo}
          // deleteTodo={deleteTodo}
          // loading={loading}
          // Error={error}
    
        />
     </TodoProvider>
  );
  
}

export default App;

// const defaultTodos=[
//   {texto:'cortar cebolla',completed:true},
//   {texto:'Tomar el curso',completed:false},
//   {texto:'Llorar con mi lal',completed:false},
//   {texto:'LALAL',completed:false},
  
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));
//  localStorage.removeItem('TODOS_V1');