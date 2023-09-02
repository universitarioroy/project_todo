import React from "react";

function  useLocalStorage(itemName,initialValue){
  
  const [Item,setItem]=React.useState(initialValue);
  const [loading,setLoading]=React.useState(true);
  const [error,setError]=React.useState(false);

  
  React.useEffect(()=>{
    setTimeout(()=>{
      
      
        try{
          const localStorageItems=localStorage.getItem(itemName);
          let parsedItems;
          if(!localStorageItems){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItems=initialValue;
          }else{
            parsedItems=JSON.parse(localStorageItems);
          }
          setItem(parsedItems);
          setLoading(false); 
        }catch(error){
          setError(true);
          console.log("El error es"+error);
          setLoading(false); 
        }
      },1000);

    },[]);

  
    const saveItem=(newItems)=>{
      localStorage.setItem(itemName,JSON.stringify(newItems));
      setItem(newItems);
    }
  
    return {Item,saveItem,error,loading};
  }


  export {useLocalStorage};
  