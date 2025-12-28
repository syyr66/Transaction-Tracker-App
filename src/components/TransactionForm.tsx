import { useState } from 'react';
import type { Transaction } from '../types/transaction';
import "./TransactionForm.css"

interface TransactionFormProps {
    onAddTransaction: (data: Omit<Transaction, 'id'>) => void;
    onClose: () => void;
}

export const TransactionForm = ({ onAddTransaction, onClose }: TransactionFormProps) => {
    const [description, setDescription] = useState<string>('')
    const [amount, setAmount] = useState<string>('')
    const [type, setType] = useState<'income' | 'expense'>('income')


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        // validate amount
        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0 ) {
            return; // do not submit invalid data
        }

        onAddTransaction({
            description,
            amount: parsedAmount,
            type
        })

        // clear after submit
        setDescription('')
        setAmount('')
        setType('income')

        // close modal 
        onClose()
    }

    return (
        <div className="transaction-form-container">
            <form className='transaction-form' onSubmit={handleSubmit}>
                <div className="transaction-form__description">
                    <label htmlFor="description" className='transaction-form__label'>Description:</label>
                    <textarea 
                        id="description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="transaction-form__amount">
                    <label htmlFor="amount" className='transaction-form__label'>Amount:</label>
                    <input 
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={((e) => setAmount(e.target.value))} 
                        placeholder='Enter the amount' 
                    />
                </div>
                <div className="transaction-form__type">
                    <label className='transaction-form__label'>Transaction type:</label>
                    <div className="transaction-form__inputs">
                        <div>
                            <input
                                id="income"
                                name="type"
                                type='radio'
                                value="income"
                                checked={type === 'income'}
                                onChange={() => setType('income')}
                            />
                            <label htmlFor="income">Income</label>
                        </div>
                        <div>
                            <input
                                id="expense"
                                name="type"
                                type='radio'
                                value="expense"
                                checked={type === 'expense'}
                                onChange={() => setType('expense')}
                            />
                            <label htmlFor="expense"> Expense</label>
                        </div>
                    </div>
                </div>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    )
}