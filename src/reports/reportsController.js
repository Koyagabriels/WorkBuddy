import { calculateNetPay } from '../engine/taxEngine';

// This function looks at all your shifts and does the math
export const getEarningsSummary = (shifts) => {
  const grossPay = shifts.reduce((sum, shift) => sum + (shift.amount || 0), 0);
  const netPay = calculateNetPay(grossPay);

  return {
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
  };
};
