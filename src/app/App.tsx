import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

import Routing from "../pages/Routing";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
