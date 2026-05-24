import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useWorkStore = create(persist((set) => ({
  shifts: [],
  organisations: [],

  addOrganisation: (org) => set((state) => ({
    organisations: [...state.organisations, { ...org, id: Date.now() }]
  })),

  addShift: (shift) => set((state) => ({ 
    shifts: [...state.shifts, { ...shift, id: Date.now() }] 
  })),
}), {
  name: 'workbuddy-storage',
}));
