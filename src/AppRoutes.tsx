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
import Investimentos from './componentes/Investimentos'
import Seguranca from './componentes/Seguranca'
import Ajuda from './componentes/Ajuda'
import './App.css'


function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{user: 'Lucas Rocha'}}>
          <BrowserRouter basename="/">
            <Routes>
              <Route  path={'/'} element={<Login />}/>
              <Route  path={'/'} element={<PethRouter />}>
                <Route  path={'/home'} element={<Home />}/>
                <Route  path={'/dashboard'} element={<Dashboard />}/>
                <Route  path={'/transferencia'} element={<Transferencia />}/>
                <Route  path={'/cartoes'} element={<Cartoes />}/>
                <Route  path={'/investimentos'} element={<Investimentos />}/>
                <Route  path={'/seguranca'} element={<Seguranca />}/>
                <Route  path={'/ajuda'} element={<Ajuda />}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </QueryClientProvider>
  )
}

export default App
