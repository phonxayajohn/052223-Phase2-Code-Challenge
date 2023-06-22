import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

const API = `http://localhost:8001/transactions`

function App() {
  const [transactions, setTransactions] = useState([])

  useEffect(() =>
    fetch(API)
    .then(res => res.json())
    .then(setTransactions), [])

  function addNewTransaction(transaction) {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(transaction),
    })
      .then(res => res.json())
      .then(json => setTransactions([...transactions, json]))
  }

  
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
        transactions={transactions} 
        addNewTransaction={addNewTransaction}/>
    </div>
  );

}

export default App;
