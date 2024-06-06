
import React from 'react';

const PaymentTransaction = () => {
  const transactions = [
    { date: '2 May 2024', method: 'Apple Pay', plan: 'Free', amount: '$ 0.00' },
    { date: '4 May 2024', method: 'Apple Pay', plan: '1 week', amount: '$ 50.00' },
  ];

  return (
    <div className="w-full p-6 bg-white shadow-md rounded-3xl">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Payment transaction</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left px-4 py-2 border-b">Date</th>
            <th className="text-left px-4 py-2 border-b">Payment Method</th>
            <th className="text-left px-4 py-2 border-b">Plan</th>
            <th className="text-right px-4 py-2 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b last:border-none">
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2 flex items-center">
                <img src="/mdi_apple.svg" alt="Apple Pay" className="h-5 mr-2" />
                {transaction.method}
              </td>
              <td className="px-4 py-2">{transaction.plan}</td>
              <td className="px-4 py-2 text-right">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTransaction;
