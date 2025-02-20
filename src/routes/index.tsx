import { Navigate, Route, Routes } from 'react-router-dom';


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/pagina-inicial' element={ <div>Ola mundo</div> } />

            <Route path='*' element={ <Navigate to="/pagina-inicial" /> }></Route>
        </Routes>
    );

}
