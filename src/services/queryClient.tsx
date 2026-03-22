import { QueryClient } from "@tanstack/react-query";

// Configuração global para sua Fintech
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 1. Tenta buscar os dados 3 vezes antes de mostrar erro (Resiliência)
      retry: 3, 
      
      // 2. Se o usuário mudar de aba e voltar, ele atualiza o saldo (Freshness)
      refetchOnWindowFocus: true, 
      
      // 3. Mantém os dados no cache por 5 minutos (Performance)
      staleTime: 1000 * 60 * 5, 
      
      // 4. Não busca novamente se a internet cair e voltar se os dados forem recentes
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

export default queryClient;