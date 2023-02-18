import { useEffect, useState } from "react";
import { useCountrys } from "./hooks";

let acendente = 1;
let nuevoCountrys = []
export const CountrysApp = () => {

    const { isLoading, Africa,Americas,  startMapeoPorRegiones, startBuscarCountry } = useCountrys();
    const [country, setCountry] = useState("")

    //Para traer de 10 en 10
    const handleClick = () => {
      
        //Para traer de 10 en 10
        // let acendente = 1;
        //let nuevoCountrys = []
        const loco = Americas.slice(acendente-1, acendente+9)
        acendente=acendente+10;
        console.log(loco)
        if(loco.length === 0){
            console.log("ya no hay")
        }
    }

    //por busqueda
    const onSubmit = (event) => {
        event.preventDefault();
        startBuscarCountry(country)
    }

    useEffect(() => {
        startMapeoPorRegiones();
    }, [])
    
    if(isLoading){
        return(
            <h1>Cargando coutrys...</h1>
        )
    }


    return (
        <div>
            CountrysApp
            <br /><br />
            <form onSubmit={onSubmit} >
                <input type="text" name="country" value={country} onChange={(event) => setCountry(event.target.value) } />

                <select>
                    <option  value="uno" >una opcion</option>
                    <option value="dos" >dos opcion</option>
                    <option value="tres" >tres opcion</option>
                    <option value="cuatro" >cuatro</option>
                    <option value="cinco" >cinco tartas</option>
                </select>

                <input type="submit" value="Buscar" />
            </form>
            <br /><br />
            <button onClick={handleClick} >click</button>
        </div>
  )
}



 /*setTimeout(() => {
            startMapeoPorRegiones()   
            
            console.log( Africa.slice(acendente-1, acendente+9))
            acendente=acendente+10;
}, 2000);   */    