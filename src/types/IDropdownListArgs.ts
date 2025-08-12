import INamed from "./INamed";

export default interface IDropdownListArgs<T extends INamed> {
  items: T[] | null;
  onSelectItem: (c: T | null) => void;
  onLosingFocus: () => void;
}
