import './App.css'
import { useState, useRef } from 'react'
import type { Transaction } from './types/transaction'
import { TransactionForm } from './components/TransactionForm'
import { Balance } from './components/Balance'
import { Modal } from './components/Modal'
import { Header } from './components/Header'
import { TransactionList } from './components/TransactionsList'

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false)
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)
  const isAnyModalOpen = isBalanceModalOpen || isTransactionModalOpen

  const addTransaction = (data: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
        ...data,
        id: crypto.randomUUID()
    }

    setTransactions(prev => {
        return [newTransaction, ...prev]
    })
  }

  const removeTransaction = (id: string) => {
    setTransactions(prev => prev.filter((t) => t.id !== id))
  }

  return (
    <div className={isAnyModalOpen ? "modal-open" : ""}>
      {/* Balance Modal */}
      <Modal 
        isOpen={isBalanceModalOpen} 
        onClose={() => setIsBalanceModalOpen(false)}
        title={"Balance"}
      >
        <Balance transactions={transactions} />
      </Modal>

      {/* Transaction Form Modal */}
      <Modal 
        isOpen={isTransactionModalOpen} 
        onClose={() => setIsTransactionModalOpen(false)}
        title={"New Transaction"}  
      >
        <TransactionForm 
          onAddTransaction={addTransaction} 
          onClose={() => setIsTransactionModalOpen(false)} 
        />
      </Modal>

      {/* Rest of the App */}
      <Header 
        openBalanceModal={() => setIsBalanceModalOpen(true)} 
        openTransactionModal={() => setIsTransactionModalOpen(true)}
      />
      <main className="main-content">
        { !isAnyModalOpen && (
          <TransactionList 
            transactions={transactions}
            onDeleteTransaction={removeTransaction}  
          />
        )}
      </main>
    </div>
  )
}

export default App
