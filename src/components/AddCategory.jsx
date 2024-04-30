import {React, useState} from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState([]);

    const onInputChange = (event) =>{
        setInputValue(event.target.value, ...inputValue);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        // lamar el set  ategories y desestructurarlo y mandar el input value
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('')
    };
    return (

        <>
            <form onSubmit={(event) => onSubmit(event)}>
                <input type="text"
                placeholder="Search"
                // el valor que guarda llevara ese nombre
                value = {inputValue}
                // y cada que cambie se hara un trigger a la funcion onInpChange
                onChange = { (event) => onInputChange(event)}
                />
            </form>

            
            <p />
        </>
    );
};