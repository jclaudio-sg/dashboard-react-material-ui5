import Button from '@mui/material/Button';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shareds/contexts';


export const AppRoutes = () => {

    const { toggleTheme } = useAppThemeContext();

    return (
        <Routes>
            <Route path='/pagina-inicial' element={ 
                <div>
                    <Button variant='contained' color='primary' onClick={ toggleTheme }>
                        Acessar
                    </Button>
                </div> 
            } />

            <Route path='*' element={ <Navigate to="/pagina-inicial" /> }></Route>
        </Routes>
    );

}
