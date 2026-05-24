import React, { useState } from 'react';
import { OrganisationModal } from './components/OrganisationModal';
import { useWorkStore } from './store/useWorkStore';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const organisations = useWorkStore((state) => state.organisations);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">WorkBuddy</h1>
      
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        + Add Organisation
      </button>

      <div className="mt-6">
        <h2 className="font-semibold">My Organisations:</h2>
        <ul>
          {organisations.map((org) => (
            <li key={org.id}>{org.name}</li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <OrganisationModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
