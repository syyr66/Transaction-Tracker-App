import type { Transaction } from "../types/transaction"
import "./Balance.css"

interface BalanceProps {
    transactions: Transaction[]
}

export const Balance = ({ transactions }: BalanceProps) => {
    const expenses = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum += t.amount, 0)
    const income = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum += t.amount, 0)
    const balance = income - expenses

    return (
        <div className="balance">
            <div className="balance__amount">{balance} usd</div>
            <div className="balance__bottom">
                <div className="balance__income">Income: {income} usd</div>
                <div className="balance__expenses">Expenses: {expenses} usd</div>
            </div>
        </div>
    )
}