import "../styles/DropdownList.css";
import INamed from "../types/INamed";
import IDropdownListArgs from "../types/IDropdownListArgs";

function DropdownList<T extends INamed>(args: IDropdownListArgs<T>) {
  function OnSelect(key: number) {
    if (args === null || args.items === null || args.items.length <= key) {
      return;
    }
    args.onSelectItem(args.items[key]);
  }

  return (
    <>
      <div id="dropdown_backpanel" onClick={args.onLosingFocus}></div>
      <div className="dropdown_frame">
        <div id="dropdown_list">
          {args === null || args.items === null ? null : (
            <ul>
              {args.items.map((item, i) => (
                <li key={i}>
                  <div
                    className="channel_item"
                    onClick={() => {
                      OnSelect(i);
                      args.onLosingFocus();
                    }}
                  >
                    <p>{item.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default DropdownList;
