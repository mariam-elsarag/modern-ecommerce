export type ListItemProps = {
  title: string;
  to?: string;
  value?: string | number;
  default?: boolean;
};

export type TabPropsType = {
  list: ListItemProps[];
  variant?: "navigation" | "filter" | "click";
  value?: string;
  setValue?: React.Dispatch<any>;
  currentValue?: string | number;
  fieldName?: string;
};
