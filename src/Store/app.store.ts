import { create } from "zustand";

interface AppState {
  dashboardPageTitle: string;
  setDashboardPageTitle: (title: string) => void;
}

const useAppStore = create<AppState>()((set) => ({
  dashboardPageTitle: "",
  setDashboardPageTitle: (title) => set({ dashboardPageTitle: title }),
}));
export default useAppStore;
