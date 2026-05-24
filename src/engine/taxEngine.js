// This file calculates your money
export const calculateNetPay = (grossPay) => {
  // We take 20% for tax as a simple example
  const tax = grossPay * 0.20;
  return grossPay - tax;
};
