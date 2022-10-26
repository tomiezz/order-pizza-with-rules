type SelectionProps = SelectionViewProps;

type SelectionViewProps = {
  options: SelectionItem[];
  selectedValue?: string;
  onSelect?: React.MouseEventHandler<HTMLDivElement>;
};

type SelectionItem = {
  name: string;
  value: string;
  desc?: string;
};

export type { SelectionProps, SelectionViewProps, SelectionItem };
