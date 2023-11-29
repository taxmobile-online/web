import { create } from "zustand";
import { AuthStoreProps } from "./types";

const useAuthStore = create<AuthStoreProps>()((set) => ({
  accountType: null,
  planDuration: null,
  transactionId: null,

  setAccountType: (type) => {
    set({ accountType: type });
  },
  setPlanDuration: (duration) => {
    set({ planDuration: duration });
  },
  setTransactionId: (id) => {
    set({ transactionId: id });
  },
}));
export default useAuthStore;
