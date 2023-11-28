// Auth store
type AccountType = "PERSONAL" | "CORPERATE";
type PlanDurationType = "YEARLY" | "MONTHLY";
type CurrencyType = "NGN" | "USD";

export interface AuthStoreProps {
  accountType: AccountType;
  setAccountType: (type: AccountType) => void;

  planDuration: PlanDurationType;
  setPlanDuration: (type: PlanDurationType) => void;

  curency: CurrencyType;
  setCurrency: (type: CurrencyType) => void;
}
