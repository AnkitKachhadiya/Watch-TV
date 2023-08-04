import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import LandingPageShows from "./components/LandingPageShows";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search />
                <LandingPageShows />
              </>
            }
          />
          <Route path="/show" element="show" />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("Couldn't find root element");
}

const root = createRoot(container);
root.render(<App />);
