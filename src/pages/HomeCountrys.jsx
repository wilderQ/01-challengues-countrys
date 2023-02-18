
import { GalleryCountrys } from "../components/GalleryCountrys";
import { SelectBusqueda } from "../components/SelectBusqueda";
import { useCountrys } from "../hooks";
import '../styles/homecountrys.css'


export const HomeCountrys = () => {
    
    const { isSelectRegion, Africa, Americas, Asia, Europe, Oceania } = useCountrys();
    /*useEffect(() => {
        console.log(isSelectRegion)
    }, [isSelectRegion])*/
    return (
        <div className="homeCountrys">
            <SelectBusqueda />
            <GalleryCountrys  
                countrys={
                    (isSelectRegion === 'Americas') 
                    ? Americas
                    :(isSelectRegion == 'Africa')
                    ?Africa
                    : (isSelectRegion == 'Asia')
                    ?Asia
                    :(isSelectRegion == 'Europe')
                    ?Europe
                    :(isSelectRegion == 'Oceania')
                    ?Oceania
                    :Americas
                }

            />

        </div>
    )
}
