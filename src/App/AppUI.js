import React from 'react';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

//importamos el context
import {TodoContext} from '../TodoContext';
import { Modal } from '../Modal';
import { ContextModal } from '../contextModal';

//icons


function AppUI(props){

  const {loading,
          error,
          totalTodo,
          TodoFilter,
          completeTodo,
          deleteTodo,
          openModal,
          
        } = React.useContext(TodoContext);
  
  return(
    <React.Fragment>
      {/* <TodoContext.Consumer>
        {({
           totalTodo,
           todoCompleted,
           concluido,
        })=>(

          )}
      </TodoContext.Consumer> */}
          <TodoCounter 
              // total={totalTodo}
              // completed={todoCompleted}
              // isConcluid={concluido}
              // total={props.totalTodo} 
              // completed={props.todoCompleted}
              // isConcluid={props.concluido}
          />

      <TodoContext.Consumer>
          {({
            searchValue,
            setSearchValue,
          })=>(
            <TodoSearch 
                searchValue={searchValue} 
                setSearchValue={setSearchValue}
                //searchValue={props.searchValue} setSearchValue={props.setSearchValue}
            />
          )}
      </TodoContext.Consumer>
      {/* {props.loading  &&  <p>Estamos cargando...</p>} */}

     
            
            
            
            <TodoList>
              {loading  &&  
                <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
                </>
              }
            
            {/* {props.Error  &&  <p>Hubo un error...</p>} */}
            {error  &&  <TodosError/>}

            {/* {(!props.loading  && props.TodoFilter.length===0) && <p>Crear un Primer Todo...</p>} */}
            {(!loading  && totalTodo===0) && <EmptyTodos/>}
            
            {TodoFilter.map((todo)=>{
              return <TodoItem 
                      key={todo.texto}
                      texto={todo.texto}
                      completed={todo.completed}
                      onComplete={()=>completeTodo(todo.texto)}
                      onDelete={()=>deleteTodo(todo.texto)}
                      />
                      
            })}
          </TodoList>
        

      <CreateTodoButton/>
      {openModal && 
          <Modal>
              <ContextModal/>
          </Modal>
      }
    </React.Fragment>
    );
}

export {AppUI};