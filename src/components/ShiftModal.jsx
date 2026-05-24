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
    <div className="modal p-4 border rounded shadow-lg bg-white">
      <h2>Add Shift</h2>
      <select onChange={(e) => setFormData({...formData, orgId: e.target.value})}>
        <option value="">Select Organisation</option>
        {organisations.map(org => (
          <option key={org.id} value={org.id}>{org.name}</option>
        ))}
      </select>
      <input type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} />
      <button onClick={handleSubmit}>Save Shift</button>
    </div>
  );
};
