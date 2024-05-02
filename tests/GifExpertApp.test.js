import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en GifExpertApp', ()=>{
    test('Pruebas en titulo de pagina', ()=>{
        render(<GifExpertApp/>);
        screen.debug();
        expect(screen.getByText('Welcome!').innerHTML).toBe(" Welcome! ");

    });
    test('Pruebas en duplicidad de elementos', ()=>{
        render(<GifExpertApp/>);
        
        
        const inputBar = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(inputBar, {target : {value : 'Welcome!'}});
        fireEvent.submit(form);

        expect(screen.getAllByText('Welcome!').length).toBe(1);
    });
    test('Pruebas en mostrado de elemento nuevo en pagina', ()=>{
        render(<GifExpertApp/>);
        
        const inputBar = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(inputBar, {target : {value : 'Diana'}});
        fireEvent.submit(form);

        expect(screen.getByText('Diana').innerHTML).toBe(' Diana ');
    });
});