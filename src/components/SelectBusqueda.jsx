import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { useCountrys } from '../hooks'
import '../styles/selectbusqueda.css'


export const SelectBusqueda = () => {
    
    const { startSelectecRegion, startBuscarCountry} =  useCountrys();
    const [search, setSearch] = useState("")
    const handleSelect = (event) => {
        startSelectecRegion(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        startBuscarCountry(search)
        setSearch("")
    }

    return (
        <div className='selectBusqueda'>   
         
                <form className="busqueda" onSubmit={handleSubmit}>
                    <div className="busqueda-form">
                        <FiSearch className='icon-moon'/>
                        <input 
                            onChange={(event)=>setSearch(event.target.value) }
                            value={search}
                            type="text"
                            placeholder='Search for a country?'
                        />
                    </div>
                    <input style={{display:'none'}}  type="submit" value="buscar" />
                </form>
            

            <div>
                <select  onChange={handleSelect} >
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}
