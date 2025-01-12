import React from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import SummaryChart from '../components/SummaryChart';

function HomePage() {
  return (
    <div>
      <TransactionForm />
      <TransactionList />
      <SummaryChart />
    </div>
  );
}

export default HomePage;
