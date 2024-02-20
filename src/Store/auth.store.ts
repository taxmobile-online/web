import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { AuthStoreProps } from "./types";

const useAuthStore = create<AuthStoreProps>()(
  persist(
    immer(
      devtools((set) => ({
        pricingId: "",
        userData: {},
        accountType: null,
        transactionId: null,

        // Actions | Methods

        setAccountType: (type) => {
          set({ accountType: type });
        },
        setPricingId: (pricingId: string) => {
          set({ pricingId });
        },
        setTransactionId: (id) => {
          set({ transactionId: id });
        },
        setUserData: (data) => {
          set({ userData: data });
        },
      }))
    ),
    {
      name: "txmbwp_auth_store",
    }
  )
);
export default useAuthStore;
