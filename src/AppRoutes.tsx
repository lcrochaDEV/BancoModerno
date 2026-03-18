import { QueryClientProvider } from '@tanstack/react-query';
import UserContext from './componentes/ContextApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { queryClient } from './services/queryClient';
import PethRouter from './componentes/PethRouter';
import Login from './componentes/Login'
import Home from './componentes/Home'
import Dashboard from './componentes/Dashboard'
import Transferencia from './componentes/Transferencia'
import Cartoes from './componentes/Cartoes'
import './App.css'


function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{user: 'Lucas Rocha'}}>
          <BrowserRouter>
            <Routes>
              <Route  path={'/'} element={<Login />}/>
              <Route  path={'/'} element={<PethRouter />}>
                <Route  path={'/Home'} element={<Home />}/>
                <Route  path={'/Dashboard'} element={<Dashboard />}/>
                <Route  path={'/Transferencia'} element={<Transferencia />}/>
                <Route  path={'/Cartoes'} element={<Cartoes />}/>
                <Route  path={'/modem'} element={''}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </QueryClientProvider>
  )
}

export default App
