
import { FaArrowLeft} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useCountrys } from "../hooks";
import { setIsActive } from "../store/countrys/countrysSlice";

import '../styles/selectCountry.css'

export const SelectCountry = () => {
    const disptach = useDispatch();

    const {countryActive} = useCountrys();

    const handleClick = () => {
        disptach( setIsActive(false) )  
    }

 
    return (
        <div className="homeCountrys" >
            <div className="button" onClick={handleClick}>
                <FaArrowLeft className="icon-moon" />
                <span className="btn-text" >Atras</span>
            </div>

            <div className="contenido">
                <div className="contenido-img">
                    <img src={countryActive.flags.svg } alt={countryActive.name} />
                </div>
                <div className="contenido-text">
                    <h2>{countryActive.name }</h2>
                    <div className="contenido-text__column">
                        <div className="column-parrafo">
                            <p>Native Name: <span>{countryActive.nativeName} </span></p>
                            <p>Population: <span>{countryActive.population.toLocaleString('es-MX')} </span> </p>
                            <p>Region: <span>{countryActive.region} </span> </p>
                            <p>Sub Region: <span>{countryActive.subregion} </span> </p>
                            <p>Capital: <span>{countryActive.capital} </span> </p>
                        </div>
                        <div className="column-parrafo">
                            <p>Top Level Domain: <span>{countryActive.topLevelDomain} </span></p>
                            <p>Currencia: <span>{countryActive.currencies[0].name} </span> </p>
                            <p>Languages: 
                                {
                                    countryActive.languages.map(language => (
                                        <span key={language.name} >{language.name}  </span> 
                                    ))
                                }
                            </p>
                        </div> 
                    </div>
                    <div className="items-borders">
                        <span className="span-border">Borders: </span>
                        <div className="items">
                        {
                            (!countryActive.borders)
                            ? <span className="span-border" >No cuenta con Borders</span>
                            :countryActive.borders.map(border => (
                                <span key={border} className="border-item" >{border} </span> 
                            ))                
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
