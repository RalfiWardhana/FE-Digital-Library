import { Book, LendingRecord, DashboardStats } from '../types';

export const dummyBooks: Book[] = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '9780061120084',
    quantity: 5,
    category: 'Fiction',
    coverImage: '/images/mockingbird.jpg',
    borrowCount: 24
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    isbn: '9780451524935',
    quantity: 3,
    category: 'Science Fiction',
    coverImage: '/images/1984.jpg',
    borrowCount: 18
  },
  {
    id: '3',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '9780743273565',
    quantity: 4,
    category: 'Fiction',
    coverImage: '/images/gatsby.jpg',
    borrowCount: 15
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: '9780141439518',
    quantity: 2,
    category: 'Romance',
    coverImage: '/images/pride.jpg',
    borrowCount: 12
  },
  {
    id: '5',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    isbn: '9780547928227',
    quantity: 6,
    category: 'Fantasy',
    coverImage: '/images/hobbit.jpg',
    borrowCount: 30
  },
  {
    id: '6',
    title: 'Principles of Physics',
    author: 'David Halliday',
    isbn: '9780470524633',
    quantity: 3,
    category: 'Science',
    coverImage: '/images/physics.jpg',
    borrowCount: 8
  },
  {
    id: '7',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    isbn: '9780262033848',
    quantity: 2,
    category: 'Computer Science',
    coverImage: '/images/algorithms.jpg',
    borrowCount: 22
  },
  {
    id: '8',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    isbn: '9780553380163',
    quantity: 4,
    category: 'Science',
    coverImage: '/images/time.jpg',
    borrowCount: 14
  }
];

export const dummyLendingRecords: LendingRecord[] = [
  {
    id: 'l1',
    bookId: '1',
    bookTitle: 'To Kill a Mockingbird',
    borrowerId: 'u1',
    borrowerName: 'John Smith',
    borrowDate: '2025-02-15',
    returnDate: '2025-03-01',
    status: 'returned'
  },
  {
    id: 'l2',
    bookId: '5',
    bookTitle: 'The Hobbit',
    borrowerId: 'u2',
    borrowerName: 'Emma Johnson',
    borrowDate: '2025-02-20',
    status: 'borrowed'
  },
  {
    id: 'l3',
    bookId: '7',
    bookTitle: 'Introduction to Algorithms',
    borrowerId: 'u3',
    borrowerName: 'Michael Lee',
    borrowDate: '2025-01-10',
    status: 'overdue'
  },
  {
    id: 'l4',
    bookId: '2',
    bookTitle: '1984',
    borrowerId: 'u4',
    borrowerName: 'Sarah Wilson',
    borrowDate: '2025-03-05',
    status: 'borrowed'
  },
  {
    id: 'l5',
    bookId: '3',
    bookTitle: 'The Great Gatsby',
    borrowerId: 'u1',
    borrowerName: 'John Smith',
    borrowDate: '2025-02-28',
    status: 'borrowed'
  },
  {
    id: 'l6',
    bookId: '6',
    bookTitle: 'Principles of Physics',
    borrowerId: 'u5',
    borrowerName: 'David Brown',
    borrowDate: '2025-01-25',
    returnDate: '2025-02-20',
    status: 'returned'
  },
  {
    id: 'l7',
    bookId: '4',
    bookTitle: 'Pride and Prejudice',
    borrowerId: 'u2',
    borrowerName: 'Emma Johnson',
    borrowDate: '2025-02-10',
    returnDate: '2025-03-10',
    status: 'returned'
  },
  {
    id: 'l8',
    bookId: '8',
    bookTitle: 'A Brief History of Time',
    borrowerId: 'u3',
    borrowerName: 'Michael Lee',
    borrowDate: '2025-03-01',
    status: 'borrowed'
  }
];

export const dummyDashboardStats: DashboardStats = {
  totalBooks: 29,
  totalBorrowed: 12,
  totalOverdue: 2,
  mostBorrowedBooks: [
    { bookId: '5', title: 'The Hobbit', count: 30 },
    { bookId: '1', title: 'To Kill a Mockingbird', count: 24 },
    { bookId: '7', title: 'Introduction to Algorithms', count: 22 },
    { bookId: '2', title: '1984', count: 18 },
    { bookId: '3', title: 'The Great Gatsby', count: 15 }
  ],
  lendingTrends: [
    { month: 'Jan', count: 12 },
    { month: 'Feb', count: 18 },
    { month: 'Mar', count: 15 },
    { month: 'Apr', count: 8 },
    { month: 'May', count: 10 },
    { month: 'Jun', count: 7 },
    { month: 'Jul', count: 14 },
    { month: 'Aug', count: 16 },
    { month: 'Sep', count: 19 },
    { month: 'Oct', count: 22 },
    { month: 'Nov', count: 13 },
    { month: 'Dec', count: 9 }
  ],
  categoryDistribution: [
    { category: 'Fiction', count: 9 },
    { category: 'Science Fiction', count: 3 },
    { category: 'Fantasy', count: 6 },
    { category: 'Romance', count: 2 },
    { category: 'Science', count: 7 },
    { category: 'Computer Science', count: 2 }
  ]
};