import React, { useState } from 'react';
import { useWorkStore } from '../store/useWorkStore';

export const OrganisationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    defaultRate: '',
    payrollFrequency: 'monthly'
  });
  
  const addOrganisation = useWorkStore((state) => state.addOrganisation);

  const handleSubmit = () => {
    // We store the full config object
    addOrganisation({ 
      name: formData.name, 
      defaultRate: parseFloat(formData.defaultRate),
      payrollFrequency: formData.payrollFrequency,
      id: Date.now() 
    });
    onClose();
  };

  return (
    <div className="modal p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-lg font-bold mb-4">Add Organisation</h2>
      <input 
        className="border p-2 w-full mb-2"
        placeholder="Company Name (e.g. Amazon)" 
        onChange={(e) => setFormData({...formData, name: e.target.value})} 
      />
      <input 
        className="border p-2 w-full mb-2"
        type="number"
        placeholder="Default Hourly Rate (£)" 
        onChange={(e) => setFormData({...formData, defaultRate: e.target.value})} 
      />
      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onClose} className="px-4 py-2">Cancel</button>
        <button onClick={handleSubmit} className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
      </div>
    </div>
  );
};
