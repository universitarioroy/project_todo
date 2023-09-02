
import './TodoSearch.css';
import React from 'react';

function TodoSearch({searchValue,setSearchValue}){
 return(
        
            <input placeholder="Ingresa TODOS" 
                    className='TodoSearch'
                    value={searchValue}
                    onChange={(event)=>{setSearchValue(event.target.value)}}
                    >
                
            </input>

    );
}

export {TodoSearch};