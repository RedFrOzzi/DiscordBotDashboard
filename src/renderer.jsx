import "./index.css";
import { createRoot } from "react-dom/client";
import AppMainContainer from "./components/AppMainContainer";

const App = () => {
  return <AppMainContainer />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
