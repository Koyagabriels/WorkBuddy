import React, { useState } from 'react';
import { OrganisationModal } from './components/OrganisationModal';
import { useWorkStore } from './store/useWorkStore';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const organisations = useWorkStore((state) => state.organisations);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">WorkBuddy</h1>
      
      {/* Button to trigger Organisation Modal */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold"
      >
        + Add Organisation
      </button>

      {/* List of Organisations */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">My Organisations</h2>
        <div className="grid gap-3">
          {organisations.map((org) => (
            <div key={org.id} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
              <p className="font-bold text-lg">{org.name}</p>
              <p className="text-sm text-gray-600">
                Rate: £{org.defaultRate}/hr | Frequency: {org.payrollFrequency}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* The Modal Component */}
      {isModalOpen && (
        <OrganisationModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
