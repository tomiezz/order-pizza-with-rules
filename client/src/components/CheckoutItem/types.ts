type CheckoutItemViewProps = {
  title: string;
  desc?: string;
  quantity: number;
  price: number;
};

type CheckoutItemProps = CheckoutItemViewProps;

export type { CheckoutItemViewProps, CheckoutItemProps };
