import React, { useState } from 'react';
import { saveToStorage, getFromStorage } from '../utils/storage';

function TransactionForm() {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Income');
  const [note, setNote] = useState('');
  const [transactions, setTransactions] = useState(getFromStorage('transactions') || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { amount, category, note, date: new Date().toISOString() };
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    saveToStorage('transactions', updatedTransactions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Income</option>
        <option>Expense</option>
      </select>
      <input
        type="text"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
     <button onClick={handleSubmit}>Add Transaction</button>

    </form>
  );
}

export default TransactionForm;
