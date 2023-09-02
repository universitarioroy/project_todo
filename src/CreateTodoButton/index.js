import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton(){
      const {
          openModal,
          setOpenModal,
        } = React.useContext(TodoContext);
    return(
        <button className='createTodoButton'
        onClick={
            
            ()=>{
                if(!openModal){
                    setOpenModal(true);
                }else{
                    setOpenModal(false);
                }
            }}
        >+</button>
    );
}

export {CreateTodoButton};