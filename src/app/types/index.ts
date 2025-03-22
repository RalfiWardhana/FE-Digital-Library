export interface Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    quantity: number;
    category: string;
    coverImage?: string;
    borrowCount: number;
  }
  
  export interface LendingRecord {
    id: string;
    bookId: string;
    bookTitle: string;
    borrowerId: string;
    borrowerName: string;
    borrowDate: string;
    returnDate?: string;
    status: 'borrowed' | 'returned' | 'overdue';
  }
  
  export interface DashboardStats {
    totalBooks: number;
    totalBorrowed: number;
    totalOverdue: number;
    mostBorrowedBooks: {
      bookId: string;
      title: string;
      count: number;
    }[];
    lendingTrends: {
      month: string;
      count: number;
    }[];
    categoryDistribution: {
      category: string;
      count: number;
    }[];
  }