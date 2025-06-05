import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  class: string[];
  unit: string[];
  status: string[];
  weakChapters: boolean;
}

interface ChaptersState {
  activeSubject: "Physics" | "Chemistry" | "Mathematics";
  filters: FiltersState;
  sortOrder: "asc" | "desc";
}

const initialState: ChaptersState = {
  activeSubject: "Physics",
  filters: {
    class: [],
    unit: [],
    status: [],
    weakChapters: false,
  },
  sortOrder: "desc",
};

export const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    setActiveSubject: (state, action: PayloadAction<"Physics" | "Chemistry" | "Mathematics">) => {
      state.activeSubject = action.payload;
      // Reset filters when subject changes
      state.filters = initialState.filters;
    },
    toggleClassFilter: (state, action: PayloadAction<string>) => {
      if (state.filters.class.includes(action.payload)) {
        state.filters.class = state.filters.class.filter(c => c !== action.payload);
      } else {
        state.filters.class.push(action.payload);
      }
    },
    toggleUnitFilter: (state, action: PayloadAction<string>) => {
      if (state.filters.unit.includes(action.payload)) {
        state.filters.unit = state.filters.unit.filter(u => u !== action.payload);
      } else {
        state.filters.unit.push(action.payload);
      }
    },
    toggleStatusFilter: (state, action: PayloadAction<string>) => {
      if (state.filters.status.includes(action.payload)) {
        state.filters.status = state.filters.status.filter(s => s !== action.payload);
      } else {
        state.filters.status.push(action.payload);
      }
    },
    toggleWeakChapters: (state) => {
      state.filters.weakChapters = !state.filters.weakChapters;
    },
    toggleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
    },
  },
});

export const {
  setActiveSubject,
  toggleClassFilter,
  toggleUnitFilter,
  toggleStatusFilter,
  toggleWeakChapters,
  toggleSortOrder,
} = chaptersSlice.actions;

export default chaptersSlice.reducer;