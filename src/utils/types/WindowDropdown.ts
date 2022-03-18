interface DropdownItem {
  text: string;
  subItem: DropdownItem[];
}

export interface WindowDropdownType {
  heading: string;
  items: DropdownItem[];
}
