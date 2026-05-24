import React, { useState } from 'react';
import { useWorkStore } from '../store/useWorkStore';

export const ShiftModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ date: '', startTime: '', endTime: '', orgId: '' });
  const { addShift, organisations } = useWorkStore();

  const handleSubmit = () => {
    addShift({ ...formData, organisationId: formData.orgId });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Add New Shift</h2>
        
        <select 
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setFormData({...formData, orgId: e.target.value})}
        >
          <option value="">Select Organisation</option>
          {organisations.map(org => (
            <option key={org.id} value={org.id}>{org.name}</option>
          ))}
        </select>

        <input 
          type="date" 
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setFormData({...formData, date: e.target.value})} 
        />
        
        <div className="flex gap-2">
          <button onClick={onClose} className="flex-1 p-2 border rounded">Cancel</button>
          <button onClick={handleSubmit} className="flex-1 p-2 bg-indigo-600 text-white rounded">Save Shift</button>
        </div>
      </div>
    </div>
  );
};
