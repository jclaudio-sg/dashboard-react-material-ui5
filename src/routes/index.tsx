import Button from '@mui/material/Button';
import { Navigate, Route, Routes } from 'react-router-dom';


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/pagina-inicial' element={ 
                <div><Button variant='contained' color='primary'>Acessar</Button></div> 
            } />

            <Route path='*' element={ <Navigate to="/pagina-inicial" /> }></Route>
        </Routes>
    );

}
