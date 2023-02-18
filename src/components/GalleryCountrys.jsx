
import { useCountrys } from '../hooks'
import '../styles/gallerycountrys.css'

export const GalleryCountrys = ( {countrys =[]} ) => {

    const { startEventActive } = useCountrys();

    const handleSelectCard = (objeto) => {
        startEventActive(objeto)
    }

    return (
        <div className='galleryCountry'>
            {
            countrys.map( country => (
                <div className="card" key={country.name} onClick={()=>handleSelectCard(country)}  >
                    <div className="card-img" >
                        <img src={country.flags.svg } alt={country.name} />
                    </div>
                    <div className="card-text">
                        <h4>{country.name }</h4>
                        <p>Population: <span>{country.population} </span></p>
                        <p>Region: <span>{country.region} </span> </p>
                        <p>Capital: <span>{country.capital} </span> </p>
                    </div>
                </div>
            ))
            }    
        </div>
    )
}
