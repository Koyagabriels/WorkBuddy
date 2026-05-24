import React, { useState } from 'react';
import { useWorkStore } from '../store/useWorkStore';

export const OrganisationModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const addOrganisation = useWorkStore((state) => state.addOrganisation);

  const handleSubmit = () => {
    addOrganisation({ name, color: 'blue' }); // Simplified for now
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add Organisation</h2>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Company Name" 
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};
