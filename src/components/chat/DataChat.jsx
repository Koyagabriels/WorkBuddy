import React, { useState } from 'react';
import { useWorkStore } from '../../store/useWorkStore';
import { getEarningsSummary } from '../../reports/reportsController';

export const DataChat = () => {
  const shifts = useWorkStore((state) => state.shifts);
  const [response, setResponse] = useState('');

  const processQuery = (input) => {
    // Only run if there is input
    if (!input) return;
    
    const summary = getEarningsSummary(shifts);
    
    if (input.toLowerCase().includes('earn')) {
      setResponse(`You have earned £${summary.netPay} net.`);
    } else {
      setResponse("Try asking: 'How much have I earned?'");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input 
        placeholder="Ask WorkBuddy..."
        onChange={(e) => processQuery(e.target.value)}
        style={{ width: '100%', padding: '10px' }}
      />
      <div style={{ marginTop: '10px' }}>{response}</div>
    </div>
  );
};
