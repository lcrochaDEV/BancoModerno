import { useQuery } from "@tanstack/react-query";
import type { FetchQueryOptions, RequestOptions, headersDataBudy } from "../interfaces/data-interfaces";


const fetchData = async <T = unknown>(url: string, headersDataBudy: headersDataBudy): Promise<T> => {
    const headersData: RequestOptions = {
        method: 'POST', // Lembre-se: requisições de consulta costumam ser GET, mas se seu back exige POST, mantenha.
        headers: new Headers({
            "Authorization": `Bearer ${localStorage.getItem('token')}`, // Exemplo de busca de token
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
        body: JSON.stringify(headersDataBudy.dataheader),            
    };

    const response = await fetch(url, headersData);

    // ESSENCIAL: O React Query precisa que você dê um "throw" no erro
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Erro na requisição bancária');
    }

    return response.json();
};

export const useFetchData = <T = unknown>(url: string, headersDataBudy: headersDataBudy, queries: FetchQueryOptions) => {

    const query = useQuery<T, Error>({
        queryKey: queries?.queryKey || [url, headersDataBudy.dataheader], // Cache único por URL e Body
        queryFn: () => fetchData<T>(url, headersDataBudy),
        enabled: !!url && queries?.enabled, // Só dispara se houver URL
        staleTime: 1000 * 60 * 5, // 5 minutos de cache para dados de conta (exemplo)
    });

    return query; // Retorna tudo: data, isLoading, isError, error, refetch
};
