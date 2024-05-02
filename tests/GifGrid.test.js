import { fireEvent, render, screen } from "@testing-library/react";
import { GifGrid } from "../src/components/GifGrid";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

jest.mock('../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', ()=>{
    const category = 'zoo';

    test('Debe de mostrar el loading inicialmente (cargando)', ()=>{

        // le indicamos cuales valores esperar
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading : true
        });

        render(<GifGrid category={category}/>);
        screen.debug();
        const text = screen.getByText('Cargando...').innerHTML;
        expect(text).toBe('Cargando...');
    
    });

    test('Debe de mostrar Items cuando cargan las imagenes de useFetchGifs', ()=>{
        const gifs = [{
            id: 'sdfghjk',
            title: 'Zoo',
            url: 'http://4356278.com'
        },
        {
            id: 'gfhdjskiurtyghdfk',
            title: 'Beauty',
            url: 'http://4356dfhjska278.com'
        },
    ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading : false
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

    });
})