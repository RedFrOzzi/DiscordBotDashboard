import { JSX } from "react";
import "../../styles/settings/SettingsMenuList.css";
import LoadingCircle from "../../svg/LoadingCircle";
import ISettingsMenuArgs from "../../types/ISettingsMenuArgs.ts";

export default function SettingsMenuList(arg: { args: ISettingsMenuArgs }) {
  return (
    <div id="settings_menu_list">
      <ul>
        <li
          className="settings_menu_item"
          onClick={() => arg.args.refetchQuery()}
        >
          {GetLoadDataListItem(arg.args.isError, arg.args.isFetching)}
        </li>
      </ul>
    </div>
  );
}

function GetLoadDataListItem(
  isError: boolean,
  isFetching: boolean
): JSX.Element {
  if (isFetching && !isError)
    return (
      <>
        <LoadingCircle />
        <p style={{ marginLeft: "10px" }}>Загрузка данных</p>
      </>
    );

  return <p>Загрузить данные</p>;
}
