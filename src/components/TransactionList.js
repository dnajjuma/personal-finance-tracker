import React from 'react';
import { getFromStorage } from '../utils/storage';

function TransactionList() {
  const transactions = getFromStorage('transactions') || [];

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.date} - {t.category}: ${t.amount} ({t.note})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
