import SettingsCog from "../../svg/SettingsCog";
import "../../styles/settings/Settings.css";
import SettingsMenuList from "./SettingsMenuList";
import { useState } from "react";

function Settings() {
  const [isMenuOpen, setMenuState] = useState<Boolean>(false);
  return (
    <>
      {isMenuOpen ? (
        <div
          id="settings_menu_list_backpanel"
          onClick={() => setMenuState(false)}
        ></div>
      ) : null}
      {isMenuOpen ? <SettingsMenuList /> : null}
      <div className="settings_menu">
        <div id="settings_button" onClick={() => setMenuState(!isMenuOpen)}>
          <SettingsCog />
        </div>
      </div>
    </>
  );
}

export default Settings;
