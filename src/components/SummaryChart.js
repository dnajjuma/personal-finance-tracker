import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


function SummaryChart() {
  const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
  const income = transactions.filter((t) => t.category === 'Income').reduce((a, b) => a + b.amount, 0);
  const expenses = transactions.filter((t) => t.category === 'Expense').reduce((a, b) => a + b.amount, 0);

  const chartData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Amount',
        data: [income, expenses],
        backgroundColor: ['#4caf50', '#f44336'],
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default SummaryChart;
