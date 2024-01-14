import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { SectionsStoreProps } from "./types";

const useSectionStore = create<SectionsStoreProps>()(
  // persist(
  immer(
    devtools((set) => ({
      sectionToEdit: null,
      isEdit: false,

      // Actions | Methods
      setSectionToEdit: (section) => {
        set({ sectionToEdit: section });
      },
      setIsEdit: (status) => {
        set({ isEdit: status });
      },
    }))
  )
  // )
);
export default useSectionStore;
