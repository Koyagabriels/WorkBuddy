// src/controllers/reportsController.js

export const calculateShiftDuration = (shift) => {
  const [startHour, startMin] = shift.startTime.split(':').map(Number);
  const [endHour, endMin] = shift.endTime.split(':').map(Number);
  
  const startTotalMinutes = (startHour * 60) + startMin;
  const endTotalMinutes = (endHour * 60) + endMin;
  
  const durationMinutes = endTotalMinutes - startTotalMinutes;
  return durationMinutes / 60; // Returns hours (e.g., 8.5)
};

export const getAggregatedData = (shifts, organisations) => {
  return shifts.map(shift => {
    const org = organisations.find(o => o.id === shift.organisationId);
    const hours = calculateShiftDuration(shift);
    const grossPay = hours * (org?.defaultRate || 0);
    
    return {
      ...shift,
      organisationName: org?.name || 'Unknown',
      hours,
      grossPay
    };
  });
};
