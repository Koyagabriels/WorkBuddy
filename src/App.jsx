import React, { useState } from 'react';
import { OrganisationModal } from './components/OrganisationModal';
import { ShiftModal } from './components/ShiftModal'; // Import the new modal
import { useWorkStore } from './store/useWorkStore';

export default function App() {
  const [isOrgModalOpen, setIsOrgModalOpen] = useState(false);
  const [isShiftModalOpen, setIsShiftModalOpen] = useState(false); // New state
  
  const { organisations, shifts } = useWorkStore();

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">WorkBuddy</h1>
      
      {/* Action Buttons */}
      <div className="grid gap-2">
        <button 
          onClick={() => setIsOrgModalOpen(true)}
          className="bg-indigo-600 text-white p-3 rounded-lg font-semibold"
        >
          + Add Organisation
        </button>
        <button 
          onClick={() => setIsShiftModalOpen(true)}
          className="bg-emerald-600 text-white p-3 rounded-lg font-semibold"
        >
          + Add Shift
        </button>
      </div>

      {/* List of Organisations */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">My Organisations</h2>
        {organisations.map((org) => (
          <div key={org.id} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white mb-2">
            <p className="font-bold">{org.name}</p>
          </div>
        ))}
      </div>

      {/* Modals */}
      {isOrgModalOpen && <OrganisationModal onClose={() => setIsOrgModalOpen(false)} />}
      {isShiftModalOpen && <ShiftModal onClose={() => setIsShiftModalOpen(false)} />}
    </div>
  );
}
