import React, { useState, useEffect } from 'react';

const Wallet = () => {
  // Wallet state
  const [balance, setBalance] = useState(1250.75);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [action, setAction] = useState('deposit');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock transaction history - in a real app, this would come from an API
  const mockTransactions = [
    { id: 1, type: 'deposit', amount: 500.00, date: '2025-04-15', description: 'Freelance payment - Web Design' },
    { id: 2, type: 'withdrawal', amount: 120.50, date: '2025-04-10', description: 'Transfer to bank account' },
    { id: 3, type: 'deposit', amount: 300.00, date: '2025-04-05', description: 'Client payment - Logo Design' },
    { id: 4, type: 'withdrawal', amount: 75.25, date: '2025-04-01', description: 'Service fee' },
  ];

  useEffect(() => {
    // Simulate loading transactions from an API
    setIsLoading(true);
    setTimeout(() => {
      setTransactions(mockTransactions);
      setIsLoading(false);
    }, 800);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate input
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    const numericAmount = parseFloat(amount);

    if (action === 'withdrawal' && numericAmount > balance) {
      setError('Insufficient funds');
      return;
    }

    // Process transaction
    setIsLoading(true);
    setTimeout(() => {
      const newTransaction = {
        id: transactions.length + 1,
        type: action,
        amount: numericAmount,
        date: new Date().toISOString().split('T')[0],
        description: action === 'deposit' ? 'Manual deposit' : 'Manual withdrawal'
      };

      // Update balance
      const newBalance = action === 'deposit' 
        ? balance + numericAmount 
        : balance - numericAmount;

      setBalance(newBalance);
      setTransactions([newTransaction, ...transactions]);
      setAmount('');
      setIsLoading(false);
    }, 1000);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <div className="wallet-container">
      <h2 className="wallet-header">My Wallet</h2>
      
      {/* Balance Card */}
      <div className="balance-card">
        <h3>Available Balance</h3>
        <div className="balance-amount">{formatCurrency(balance)}</div>
        <div className="balance-actions">
          <button 
            className={`action-btn ${action === 'deposit' ? 'active' : ''}`}
            onClick={() => setAction('deposit')}
          >
            Deposit
          </button>
          <button 
            className={`action-btn ${action === 'withdrawal' ? 'active' : ''}`}
            onClick={() => setAction('withdrawal')}
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* Transaction Form */}
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-group">
          <label htmlFor="amount">{action === 'deposit' ? 'Deposit Amount' : 'Withdrawal Amount'}</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            step="0.01"
            min="0"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? 'Processing...' : action === 'deposit' ? 'Deposit Funds' : 'Withdraw Funds'}
        </button>
      </form>

      {/* Transaction History */}
      <div className="transaction-history">
        <h3>Transaction History</h3>
        {isLoading && transactions.length === 0 ? (
          <div className="loading">Loading transactions...</div>
        ) : transactions.length === 0 ? (
          <div className="no-transactions">No transactions yet</div>
        ) : (
          <ul className="transaction-list">
            {transactions.map((transaction) => (
              <li key={transaction.id} className={`transaction-item ${transaction.type}`}>
                <div className="transaction-info">
                  <div className="transaction-description">{transaction.description}</div>
                  <div className="transaction-date">{transaction.date}</div>
                </div>
                <div className={`transaction-amount ${transaction.type}`}>
                  {transaction.type === 'deposit' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .wallet-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .wallet-header {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin-bottom: 24px;
          text-align: center;
        }

        .balance-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
          text-align: center;
        }

        .balance-card h3 {
          font-size: 16px;
          color: #666;
          margin-bottom: 8px;
        }

        .balance-amount {
          font-size: 32px;
          font-weight: 700;
          color: #4f46e5;
          margin-bottom: 20px;
        }

        .balance-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .action-btn {
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          background: #f3f4f6;
          color: #4b5563;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn.active {
          background: #4f46e5;
          color: white;
        }

        .action-btn:hover {
          transform: translateY(-2px);
        }

        .transaction-form {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #4b5563;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          font-size: 16px;
        }

        .error-message {
          color: #ef4444;
          margin-bottom: 16px;
          font-size: 14px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: #4f46e5;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .submit-btn:hover {
          background: #4338ca;
        }

        .submit-btn:disabled {
          background: #a5b4fc;
          cursor: not-allowed;
        }

        .transaction-history {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .transaction-history h3 {
          font-size: 18px;
          color: #333;
          margin-bottom: 16px;
        }

        .loading, .no-transactions {
          text-align: center;
          color: #666;
          padding: 20px 0;
        }

        .transaction-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .transaction-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #f3f4f6;
        }

        .transaction-info {
          flex: 1;
        }

        .transaction-description {
          font-weight: 500;
          color: #111827;
        }

        .transaction-date {
          font-size: 12px;
          color: #6b7280;
          margin-top: 4px;
        }

        .transaction-amount {
          font-weight: 600;
        }

        .transaction-amount.deposit {
          color: #10b981;
        }

        .transaction-amount.withdrawal {
          color: #ef4444;
        }
      `}</style>
    </div>
  );
};

export default Wallet;