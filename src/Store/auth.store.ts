import { create } from "zustand";
import { AuthStoreProps } from "./types";

const useAuthStore = create<AuthStoreProps>()((set) => ({}));
export default useAuthStore;
