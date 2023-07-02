import { createRoot } from "react-dom/client";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("Couldn't find root element");
}

const root = createRoot(container);
root.render(<App />);
