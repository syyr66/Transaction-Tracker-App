import type { Transaction } from "../types/transaction"
import "./TransactionList.css"


interface TransactionListProps {
    transactions: Transaction[],
    onDeleteTransaction: (id: string) => void
}

export const TransactionList = ({ transactions, onDeleteTransaction }: TransactionListProps) => {
    return (
        <div className="container transactions-container">
            {(transactions.length === 0) ? (
            <div className="transactions__no-transactions-message">You don't have any transactions yet</div>
            ) : (
            <div className='transactions-list'>
                {transactions.map(t => (
                    <div key={t.id} className={t.type === 'income' ? "transaction transaction-income" : "transaction transaction-expense"}>
                        <div className="close-container">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="close"
                                onClick={() => onDeleteTransaction(t.id)}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="transaction-content">
                            <div className="transaction-description">{t.description}</div>
                            <div className="transaction-amount">{t.type === 'income' ? "+" : "-"}{t.amount} usd</div>
                        </div>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}