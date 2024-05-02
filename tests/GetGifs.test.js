import { getGifs } from "../src/helpers/getGifs";

describe('Pruebas en GetGifs y llamando a apis en pruebas', ()=>{
    test('Debe de devolver un arreglo de gifs', async()=>{
        const gifs = await getGifs('zoologico');
        console.log(gifs)
    });
});