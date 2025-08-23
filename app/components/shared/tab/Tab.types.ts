export type ListItemProps = {
  title: string;
  to?: string;
  value?: string | number;
  default?: boolean;
  icon?:
    | React.ReactElement<unknown | string>
    | React.JSXElementConstructor<any>;
};

export type TabPropsType = {
  list: ListItemProps[];
  type?: "navigation" | "filter" | "click";
  varinat?: "primary" | "secondary";
  value?: string;
  setValue?: React.Dispatch<any>;
  currentValue?: string | number;
  fieldName?: string;
  isScrollable?: boolean;
  direction?: "row" | "column";
  containerClassName?: string;
};
