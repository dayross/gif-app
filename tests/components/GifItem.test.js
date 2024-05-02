import { fireEvent, render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('Set de pruebas para GifItem.js', ()=>{

    const title = 'zoologico';
    const url = 'http://asdfghjkl.com/';

    // test('Probando que los tipos de datos sean los correctos', ()=>{
    //     const {title, url} = render(<GifItem title="hola" url="person.com"/>);
    //     expect(typeof (title)).toEqual('string');
    // });


    test('Hacer match con el snapshot', ()=>{
        const {container} = render(<GifItem title="hola" url="person.com"/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y titulo indicado', ()=>{
        render(<GifItem title= {title} url={url} />);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titulo en pantalla', ()=>{
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

    });
});