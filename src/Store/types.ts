// Auth store
type AccountType = "PERSONAL" | "CORPERATE" | null;
type PlanDurationType = "YEARLY" | "MONTHLY" | null;
type CurrencyType = "NGN" | "USD";

export interface AuthStoreProps {
  accountType?: AccountType;
  setAccountType?: (type: AccountType) => void;

  planDuration?: PlanDurationType;
  setPlanDuration?: (duration: PlanDurationType) => void;

  curency?: CurrencyType;
  setCurrency?: (type: CurrencyType) => void;

  transactionId?: string | number | null;
  setTransactionId?: (id: string | number) => void;
}
