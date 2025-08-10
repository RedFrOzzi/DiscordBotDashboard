import "../styles/AppMainContainer.css";
import MainFrame from "./MainFrame.js";
import Settings from "./settings/Settings.js";

function AppMainContainer() {
  return (
    <div className="app_main_container">
      <Settings />
      <MainFrame />
    </div>
  );
}

export default AppMainContainer;
