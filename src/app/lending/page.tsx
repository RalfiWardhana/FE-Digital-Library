// File: /app/lending/page.tsx
"use client";
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { dummyLendingRecords, dummyBooks } from '../lib/dummyData';
import { LendingRecord, Book } from '../types';

export default function LendingPage() {
  const [lendingRecords, setLendingRecords] = useState<LendingRecord[]>(dummyLendingRecords);
  const [books] = useState<Book[]>(dummyBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLending, setNewLending] = useState<Partial<LendingRecord>>({
    bookId: '',
    borrowerId: '',
    borrowerName: '',
    borrowDate: new Date().toISOString().split('T')[0],
    status: 'borrowed',
  });

  const filteredRecords = lendingRecords.filter(record => {
    const matchesSearch = record.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          record.borrowerName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || record.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleAddLending = () => {
    // Mendapatkan judul buku berdasarkan bookId
    const selectedBook = books.find(book => book.id === newLending.bookId);
    
    if (!selectedBook) return;
    
    const lending: LendingRecord = {
      ...newLending as LendingRecord,
      id: `l${lendingRecords.length + 1}`,
      bookTitle: selectedBook.title
    };
    
    setLendingRecords([...lendingRecords, lending]);
    setShowAddModal(false);
    setNewLending({
      bookId: '',
      borrowerId: '',
      borrowerName: '',
      borrowDate: new Date().toISOString().split('T')[0],
      status: 'borrowed',
    });
  };

  const handleStatusChange = (id: string, newStatus: 'borrowed' | 'returned' | 'overdue') => {
    setLendingRecords(records => 
      records.map(record => 
        record.id === id 
          ? { 
              ...record, 
              status: newStatus,
              returnDate: newStatus === 'returned' ? new Date().toISOString().split('T')[0] : record.returnDate
            } 
          : record
      )
    );
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lending Management</h1>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center"
        >
          <span className="material-symbols-outlined mr-1">add</span>
          Register New Lending
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-symbols-outlined text-gray-400">search</span>
            </span>
            <input
              type="text"
              placeholder="Search by book title or borrower name..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="ml-4">
            <select 
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="borrowed">Borrowed</option>
              <option value="returned">Returned</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borrower</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borrow Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRecords.map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{record.bookTitle}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.borrowerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.borrowDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.returnDate || '-'}</td>
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
                  <td className="px-6 py-4 whitespace-nowrap flex">
                    {record.status === 'borrowed' && (
                      <>
                        <button 
                          className="text-blue-600 hover:text-blue-900 mr-2"
                          onClick={() => handleStatusChange(record.id, 'returned')}
                        >
                          <span className="material-symbols-outlined">assignment_return</span>
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-900 mr-2"
                          onClick={() => handleStatusChange(record.id, 'overdue')}
                        >
                          <span className="material-symbols-outlined">report_problem</span>
                        </button>
                      </>
                    )}
                    {record.status === 'overdue' && (
                      <button 
                        className="text-blue-600 hover:text-blue-900 mr-2"
                        onClick={() => handleStatusChange(record.id, 'returned')}
                      >
                        <span className="material-symbols-outlined">assignment_return</span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Lending Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Register New Lending</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Book</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
                value={newLending.bookId}
                onChange={(e) => setNewLending({...newLending, bookId: e.target.value})}
              >
                <option value="">Select a book</option>
                {books.map(book => (
                  <option key={book.id} value={book.id}>{book.title}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Borrower ID</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
                value={newLending.borrowerId || ''}
                onChange={(e) => setNewLending({...newLending, borrowerId: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Borrower Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
                value={newLending.borrowerName || ''}
                onChange={(e) => setNewLending({...newLending, borrowerName: e.target.value})}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Borrow Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
                value={newLending.borrowDate}
                onChange={(e) => setNewLending({...newLending, borrowDate: e.target.value})}
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLending}
                className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700"
              >
                Register Lending
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}