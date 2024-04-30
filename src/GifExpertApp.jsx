import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    // este es el useState que nos permite mantener el estado
    const [categories, setCategories] = useState(['Zoo', 'Clothing']);

    const onAddCategory = (newCategory) =>{
        // si la catehoria ya existe, no se ejecuta
        
        if (categories.includes(newCategory)) return;

        // console.log(newCategory);

        setCategories([newCategory , ...categories, ]);
    };

    console.log(categories);
    // SIEMPRE hay que tratar de iniciaizar el estado

    // hay hooks de react que mantienen el estado para cuando
    // queremos guardar un historial o algo asi
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
             onNewCategory = { (value) => onAddCategory(value) }
            />
                
                 {categories.map( (category) => 
                    // la llave indica cuales son los elementos de la categoria. es como
                    // si fuera un index 
                    ( <GifGrid 
                        key={category} 
                        category={category} />   
                    ))
                }
        </>
    );
}