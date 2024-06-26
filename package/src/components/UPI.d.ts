import React from 'react';

export interface UpiOptions {
  payeeVPA: string;
  payeeName?: string;
  amount?: number;
  note?: string;
  transactionRefUrl?: string;
  transactionRef?: string;
  payeeMerchantCode?: string;
  minimumAmount?: string;
  currency?: string;
  transactionId?: string;
}

declare const UPI: React.FC<{ upiOptions: UpiOptions }>;

export default UPI;