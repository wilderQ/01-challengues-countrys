
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../store/ui/uislice';
import { FaMoon  } from 'react-icons/fa'
import { FiMoon  } from 'react-icons/fi'
import '../styles/navbar.css'


export const Navbar = () => {
    const { theme } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const handleTheme = () => {
        dispatch(setTheme())
    }

    return (
        <div className='nav' >
            <div className="navbar">	
                <div className="navbar-content">
                    <div className="navbar-content__left">
                        <h3>Where in the world?</h3>
                    </div>
                    <div className="navbar-content__rigth" onClick={handleTheme}>
                        {
                            theme
                            ?
                            <>
                                <FaMoon className='icon-moon' /> 
                                <span>DarkMode</span>
                            </> 
                            :
                            <>
                               <FiMoon className='icon-moon fontSizeMoon' />
                                <span>LigthMode</span>
                            </> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
