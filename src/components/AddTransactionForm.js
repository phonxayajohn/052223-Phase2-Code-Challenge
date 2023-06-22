import React, { useState } from "react";

function AddTransactionForm({ addNewTransaction }) {
  const [transaction, setTransaction] = useState({ 
    date:'', description:'', category:'', amount: 0 })

  function handleChange(e) {
    setTransaction({...transaction, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    addNewTransaction(transaction)
    
  }
 
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange} value={transaction.name} />
          <input type="text" name="description" placeholder="Description" onChange={handleChange} value={transaction.description} />
          <input type="text" name="category" placeholder="Category" onChange={handleChange} value={transaction.category} />
          <input type="number" name="amount" placeholder="Amount" step="0.01"onChange={handleChange} value={transaction.amount} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
