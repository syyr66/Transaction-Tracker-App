# Transaction Tracker

A simple React application for tracking income and expenses.

## Features

- Add income and expense transactions
- View current balance with income/expense breakdown
- Delete transactions
- Modal-based UI for adding transactions and viewing balance

## Tech Stack

- **React 19** with TypeScript
- **Vite** for development and bundling

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ts-react-project

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Balance.tsx        # Balance display component
│   ├── Header.tsx         # Navigation header
│   ├── Modal.tsx          # Reusable modal component
│   ├── TransactionForm.tsx    # Form for adding transactions
│   └── TransactionsList.tsx   # List of transactions
├── types/
│   └── transaction.ts     # TypeScript interfaces
├── App.tsx                # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Usage

1. Click **"New Transaction"** in the header to add a transaction
2. Fill in the description, amount, and select type (income/expense)
3. Click **"Add Transaction"** to save
4. View your balance by clicking **"Balance"** in the header
5. Delete transactions by clicking the X button on each transaction card

## License

MIT
