import React from 'react';
import { LendingRecord } from '../../types';

interface RecentLendingTableProps {
  records: LendingRecord[];
}

const RecentLendingTable = ({ records }: RecentLendingTableProps) => {
  // Menampilkan 5 record terbaru
  const recentRecords = [...records]
    .sort((a, b) => new Date(b.borrowDate).getTime() - new Date(a.borrowDate).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Recent Lending Activities</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borrower</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentRecords.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap">{record.bookTitle}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.borrowerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.borrowDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${record.status === 'borrowed' ? 'bg-green-100 text-green-800' : 
                        record.status === 'returned' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {record.status === 'borrowed' ? 'Borrowed' : 
                     record.status === 'returned' ? 'Returned' : 'Overdue'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentLendingTable;