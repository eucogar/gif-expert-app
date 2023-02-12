
import {GifItem} from './GifItem';
import {useFetGifs} from './hooks/useFetGifs';


export const GifGrid = ({categories}) => {

    const {images, isLoading } = useFetGifs(categories);

    return (
        <>
            <h3>{ categories }</h3>
            {
               isLoading && (<h2> Cargado...</h2>)

            }
            <div className={'card-grid '}>
                {
                    images.map( (image) =>(
                        <GifItem
                            { ...image }
                        />
                    ) )
                }
            </div>
        </>
    )
}