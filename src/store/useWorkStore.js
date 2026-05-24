import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useWorkStore = create(persist((set) => ({
  shifts: [],
    addShift: (shift) => set((state) => ({ 
        shifts: [...state.shifts, { ...shift, id: Date.now() }] 
          })),
          }), {
            name: 'workbuddy-storage',
            }));
           
