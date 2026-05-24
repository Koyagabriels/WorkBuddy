// src/engine/taxEngine.js

export const TAX_YEAR_2026_27 = {
  personalAllowance: 12570,
  niThresholds: {
    primaryThreshold: 12570,
    upperEarningsLimit: 50270,
  },
  rates: {
    basic: 0.20,
    ni: 0.08, 
    pensionDefault: 0.05
  }
};

export const calculateNetPay = (grossPay, taxConfig = TAX_YEAR_2026_27) => {
  const incomeTax = grossPay * taxConfig.rates.basic;
  const nationalInsurance = grossPay * taxConfig.rates.ni;
  const pension = grossPay * taxConfig.rates.pensionDefault;
  
  const totalDeductions = incomeTax + nationalInsurance + pension;
  
  return {
    grossPay,
    incomeTax,
    nationalInsurance,
    pension,
    totalDeductions,
    netPay: grossPay - totalDeductions
  };
};
