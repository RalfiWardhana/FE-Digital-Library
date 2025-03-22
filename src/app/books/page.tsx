// File: /app/books/page.tsx
"use client";
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { dummyBooks } from '../lib/dummyData';
import { Book } from '../types';

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>(dummyBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBook, setNewBook] = useState<Partial<Book>>({
    title: '',
    author: '',
    isbn: '',
    quantity: 1,
    category: '',
  });

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.isbn.includes(searchTerm)
  );

  const handleAddBook = () => {
    // Simulasi penambahan buku baru
    const book: Book = {
      ...newBook as Book,
      id: `${books.length + 1}`,
      borrowCount: 0
    };
    
    setBooks([...books, book]);
    setShowAddModal(false);
    setNewBook({
      title: '',
      author: '',
      isbn: '',
      quantity: 1,
      category: '',
    });
  };

  const handleDeleteBook = (id: string) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Books Management</h1>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center"
        >
          <span className="material-symbols-outlined mr-1">add</span>
          Add New Book
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
              placeholder="Search books by title, author, or ISBN..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="ml-4">
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Romance">Romance</option>
              <option value="Science">Science</option>
              <option value="Computer Science">Computer Science</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.isbn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{book.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDeleteBook(book.id)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Book Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Book</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
                value={newBook.title}
                onChange={(e) => setNewBook({...newBook, title: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
                value={newBook.author}
                onChange={(e) => setNewBook({...newBook, author: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
                value={newBook.isbn}
                onChange={(e) => setNewBook({...newBook, isbn: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
                value={newBook.category}
                onChange={(e) => setNewBook({...newBook, category: e.target.value})}
              >
                <option value="">Select a category</option>
                <option value="Fiction">Fiction</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Romance">Romance</option>
                <option value="Science">Science</option>
                <option value="Computer Science">Computer Science</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input
                type="number"
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500"
                value={newBook.quantity}
                onChange={(e) => setNewBook({...newBook, quantity: parseInt(e.target.value)})}
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
                onClick={handleAddBook}
                className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700"
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}