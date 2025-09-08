import SettingsCog from "../../svg/SettingsCog";
import "../../styles/settings/Settings.css";
import SettingsMenuList from "./SettingsMenuList";
import { useState } from "react";
import ISettingsMenuArgs from "../../types/ISettingsMenuArgs.ts";

function Settings(args: ISettingsMenuArgs) {
  const [isMenuOpen, setMenuState] = useState<Boolean>(false);
  return (
    <>
      {isMenuOpen ? (
        <div
          id="settings_menu_list_backpanel"
          onClick={() => setMenuState(false)}
        ></div>
      ) : null}
      {isMenuOpen ? <SettingsMenuList args={args} /> : null}
      <div className="settings_menu">
        <div id="settings_button" onClick={() => setMenuState(!isMenuOpen)}>
          <SettingsCog />
        </div>
      </div>
    </>
  );
}

export default Settings;
