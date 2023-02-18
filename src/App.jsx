import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Navbar } from "./components/Navbar";
import { useCountrys } from "./hooks"
import { HomeCountrys } from "./pages/HomeCountrys";
import { SelectCountry } from "./pages/SelectCountry";



export const App = () => {

    const { isLoading, startMapeoPorRegiones, isActive } = useCountrys();
    const { theme } = useSelector(state => state.ui);
    
    useEffect(() => {
        startMapeoPorRegiones();
    }, [])
    
    if(isLoading){
        return(
            <h1>Cargando ..</h1>
        )
    }

    return (
        <div className={theme?'dark-mode' :'light-mode'} >
            <Navbar />
            {
            (!isActive) ? <HomeCountrys />: <SelectCountry />
            }
        </div>
      
    
    )
}
