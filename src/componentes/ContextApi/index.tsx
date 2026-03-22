/*import React, { createContext, useContext, type ReactNode } from 'react';
import type { UserContextType, UserProfile } from "../interfaces/data-interfaces";
import { useFetchData } from "../hooks/useFetch";

const UserContext = createContext<UserContextType | undefined>(undefined);

const URLFETCH = 'http://localhost:8000/gw/ont121w';

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const { data:isData, isLoading, isError } = useFetchData<UserProfile>(URLFETCH, {
            dataheader: {
                "id": "",
                "full_name": "",
                "email": "admin",
                "balance": 0,
            },
        }, {
            queryKey: ['isArpData', 'isArpCacheData'],
        });
  return (
    <UserContext.Provider value={{ user: isData || null, isLoading, isError }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook customizado para facilitar o uso nos componentes
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser deve ser usado dentro de um UserProvider');
  return context;
};*/

import { createContext } from "react";


const UserContext = createContext({});

export default UserContext;