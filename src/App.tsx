import "./styles/global.scss";
import { Footer } from "./layout/Footer/Footer";
import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Main/Main";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { cacheTime: Infinity, staleTime: 100000, refetchOnWindowFocus: false } }
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="layout">
        <Header />
        <Main />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};
