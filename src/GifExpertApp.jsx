import {useState} from 'react';
import {AddCategories, GifGrid} from './componenst';


export const GifExpertApp = () => {


  const  [categories, setCategories] = useState(['Dragon Ball']);


    const  onAddCategory = (onNewCategory) => {

        if ( categories.includes(onNewCategory)) return;
        //categories.push(onNewCategory)
        //console.log(onNewCategory);
        setCategories( [onNewCategory, ...categories] )

   }

    return(
        <>
            <h1>GifExportApp</h1>
            
            <AddCategories

                onNewCategory = {(event) => onAddCategory(event)}
            />



            {
                categories.map(categories => (
                   < GifGrid
                       key = {categories}
                       categories = {categories}/>
                ))

            }


        </>
    );
};