import React from "react";
import {TodoContext} from './../TodoContext';


function ContextModal(){
    const { setOpenModal,
            addTodo,
            openModal
            } = React.useContext(TodoContext);
   
    const abrirModal=()=>{
        setOpenModal(!openModal);
    } 

    const cerrarModal=()=>{
        setOpenModal(!openModal);
    }

    const [area,SetArea]=React.useState('');

    return(
        <div className="Modal-content">
                <header className="header container"> 
                    <p>Input New Tasks</p>
                    <span
                        onClick={()=>{abrirModal()}}
                    >X</span> 
                </header>
                <div className="body container">
                    <label htmlFor="tarea">Descripcion:</label>
                    <textarea id='tarea'placeholder='task...'
                        onChange={(event)=>{SetArea(event.target.value)}}>
                    </textarea>
                </div>
                <footer className="footer container">
                  <button
                        onClick={()=>{
                            addTodo({texto:area,completed:false});
                            setOpenModal(false);
                  }}
                  >add</button>
                  <button
                   onClick={()=>{ 
                        cerrarModal()
                    }}
                  >cancel</button>
                </footer>
            </div>
    )
}


export {ContextModal};