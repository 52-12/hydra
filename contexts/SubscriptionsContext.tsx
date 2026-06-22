import { createContext } from "react";

export const TIP_PRODUCT_IDS_IOS = [
  "com.dmilin.hydra.tip.small",
  "com.dmilin.hydra.tip.medium",
  "com.dmilin.hydra.tip.large",
  "com.dmilin.hydra.tip.huge",
] as const;

export type TipProductId = (typeof TIP_PRODUCT_IDS_IOS)[number];

/** Minimal shape of a StoreKit tip product used by the Tip Jar settings page. */
export interface TipProduct {
  identifier: string;
  title: string;
  priceString: string;
}

interface SubscriptionContextType {
  /**
   * All features are free. `isPro` is kept as an always-true flag so the rest
   * of the app can continue to gate behavior on it without a paid tier.
   */
  isPro: boolean;
  /**
   * There is no longer a paid customer record. Features that previously called
   * the hosted Hydra backend with a customer id have been removed, so this is
   * always null.
   */
  customerId: string | null;
  /**
   * The RevenueCat tip products can no longer be loaded without the paid
   * backend, so the Tip Jar shows its fallback message instead.
   */
  tipProducts: TipProduct[] | null;
  buyTip: (product: TipProduct) => Promise<boolean>;
  isLoadingProductsAndOfferings: boolean;
}

const initialSubscriptionContext: SubscriptionContextType = {
  isPro: true,
  customerId: null,
  tipProducts: null,
  buyTip: async () => false,
  isLoadingProductsAndOfferings: false,
};

export const SubscriptionsContext = createContext(initialSubscriptionContext);

export function SubscriptionsProvider({ children }: React.PropsWithChildren) {
  return (
    <SubscriptionsContext.Provider value={initialSubscriptionContext}>
      {children}
    </SubscriptionsContext.Provider>
  );
}
