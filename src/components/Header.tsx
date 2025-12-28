interface HeaderProps {
    openBalanceModal: () => void;
    openTransactionModal: () => void
}

export const Header = ({ openBalanceModal, openTransactionModal }: HeaderProps) => {
    return (
        <header>
            <div className="container header-container">
                <ul className="header-list">
                    <li onClick={openBalanceModal}>Balance</li>
                    <li onClick={openTransactionModal}>New Transaction</li>
                </ul>
            </div>
        </header>
    )
}