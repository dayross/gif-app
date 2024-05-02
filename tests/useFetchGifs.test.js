import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../src/hooks/useFetchGifs";


describe('Pruebas en hook de useFetchGifs', ()=>{
    test('Pruebas en estado inicial del hook', ()=>{
        const {result} = renderHook( ()=> useFetchGifs('Zoo'));
        const {images, isLoading} = result.current;
        

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });


    test('Se debe de retornar un arreglo de imagenes y el isLoading en false', async()=>{
        const {result} = renderHook( ()=> useFetchGifs('Zoo'));
        
        // vamos a esperar a que el arreglo de result sea mayor que 0 para poder continuar
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        // ya desestructuramos una vez que haya pasado esa instruccion
        const {images, isLoading} = result.current;
        // y esperamos que el arreglo tenga elementos y que ya la bandera
        // de carga sea negativa
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
})