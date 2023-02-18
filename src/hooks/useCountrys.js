import data from '../db/data.json';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryActive, setCountrysAfrica, setCountrysAmericas, setCountrysAsia, setCountrysEurope, setCountrysOceania, setIsActive, setIsSelectRegion, setLoadingCountrys } from '../store/countrys/countrysSlice';


export const useCountrys = () => {
    
    const dispatch = useDispatch();
    const {isLoading, isActive, isSelectRegion, countryActive, Africa, Americas, Asia, Europe, Oceania } = useSelector(state => state.countrys);

    const startMapeoPorRegiones = () => {
        for (const objeto of data) {
            switch (objeto.region) {
                case 'Africa':
                    dispatch(setCountrysAfrica(objeto));
                    break;
                case 'Americas':
                    dispatch(setCountrysAmericas(objeto));
                    break;
                case 'Asia':
                    dispatch(setCountrysAsia(objeto));
                    break;
                case 'Europe':
                    dispatch(setCountrysEurope(objeto));
                    break;
                case 'Oceania':
                    dispatch(setCountrysOceania(objeto));
                    break;
                default:
                    dispatch(setLoadingCountrys());
                    break;
            }
        }
    }
    const startBuscarCountry = (country) =>{
        let encontrado = "";
        encontrado = Americas.find( pais => pais.name.toLowerCase().trim() == country.toLowerCase().trim() );
        if(!!encontrado){
            dispatch(setCountryActive(encontrado))
            dispatch(setIsActive(true))
            return 
        }
        encontrado = Africa.find( pais => pais.name.toLowerCase().trim() == country.toLowerCase().trim() );
        if(!!encontrado) return console.log(encontrado)
        encontrado = Asia.find( pais => pais.name.toLowerCase().trim() == country.toLowerCase().trim() );
        if(!!encontrado) return console.log(encontrado)
        encontrado = Europe.find( pais => pais.name.toLowerCase().trim() == country.toLowerCase().trim() );
        if(!!encontrado) return console.log(encontrado)
        encontrado = Oceania.find( pais => pais.name.toLowerCase().trim() == country.toLowerCase().trim() );
        if(!!encontrado) return console.log(encontrado)
        
        alert(`no se pudo encontrar el pais con el nombre "${country}", mejoraremos nuestra opción de busqueda.`)
     
    }

    const startSelectecRegion = (region) => {
        dispatch(setIsSelectRegion(region))
    }
    
    const startEventActive = (region) => {
        dispatch(setCountryActive(region))
        dispatch(setIsActive(true))
    }

    return{

        //propiedades
        isActive,
        isLoading,
        isSelectRegion,
        Africa,
        Americas,
        Asia,
        Europe,
        Oceania,
        countryActive,

        //metodos
        startMapeoPorRegiones,
        startBuscarCountry,
        startSelectecRegion,
        startSelectecRegion,
        startEventActive
    }

}
