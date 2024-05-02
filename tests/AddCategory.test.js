import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../src/components/AddCategory";


describe('Pruebas en Add Category', ()=>{
    test('Que cambie el valor de la caja de texto', ()=>{
        render( <AddCategory onNewCategory={() => {} }/>);
        const input = screen.getByRole('textbox');
        fireEvent.input( input, {target: {value : 'giraffe'}} );

        expect(input.value).toBe('giraffe'); 
    });

    test('Debe de llamar onViewCategory si el input tiene valor', ()=>{
        const inputValue= 'panda';
        const onNewCategory = jest.fn();
        // todo
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        // le asignamos un valor a la caja de texto
        fireEvent.input(input, {target : {value : inputValue}});
        // cuando damos el submit, la caja vuelve a tener solo ''
        fireEvent.submit(form);

        // esperamos que el textbox de busqueda sea ''
        expect(input.value).toBe('');

        // esperamos que una vez dando en submit, se haya llamado la funcion onInputChange
        expect(onNewCategory).toHaveBeenCalled();
        // que se haya llamado 1 cantidad de vecs
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // que se haya llamado con un valor en especifico
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar el onNewCategory si el input esta vacio', ()=>{
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target : {value : ' '}});
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    });
    
});