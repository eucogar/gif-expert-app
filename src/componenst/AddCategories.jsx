import {useState} from 'react';

export const AddCategories = ({ onNewCategory }) => {

    const [inputValue, setUnputValue] = useState([]);
    const onInputChange = ({ target }) => {
        setUnputValue( target.value );
    }

    const onsubmit = ( event ) =>
    {
        event.preventDefault();
        if( inputValue.trim().length <= 1)  return;
        //setCategories( categories => [inputValue, ...categories] );
        onNewCategory(inputValue.trim());
        setUnputValue('');

    }
    return(
        <form onSubmit={  onsubmit }>
            <input
                type={'Text'}
                placeholder={'Buscar Gifs'}
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

    )
}