import React from 'react';

const Invoices = () => {
  const invoices = [
    {
      id: 'INV-001',
      date: '2025-10-15',
      amount: '$149.99',
      status: 'Paid',
      pdf: '#'
    },
    {
      id: 'INV-002',
      date: '2025-09-15',
      amount: '$149.99',
      status: 'Paid',
      pdf: '#'
    },
    {
      id: 'INV-003',
      date: '2025-08-15',
      amount: '$149.99',
      status: 'Paid',
      pdf: '#'
    }
  ];

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Invoices</h2>

      {invoices.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Invoice ID</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Date</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Amount</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">{invoice.id}</td>
                  <td className="px-4 py-3 text-gray-600">{invoice.date}</td>
                  <td className="px-4 py-3 text-gray-600 font-semibold">{invoice.amount}</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={invoice.pdf}
                      className="text-orange-500 hover:text-orange-600 font-semibold text-sm"
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No invoices found.</p>
        </div>
      )}
    </div>
  );
};

export default Invoices;
