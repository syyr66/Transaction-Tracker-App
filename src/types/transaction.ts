export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

// TransactionFormData class can be constructed as Omit<Transaction, 'id'>