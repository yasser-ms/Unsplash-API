
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppContext } from "./context";
/* import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; */
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </AppContext>
);
