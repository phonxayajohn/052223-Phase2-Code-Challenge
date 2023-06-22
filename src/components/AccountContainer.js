import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, addNewTransaction }) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <Search setSearchTerm={setSearchTerm}/>
      <AddTransactionForm addNewTransaction={addNewTransaction} />
      <TransactionsList transactions={transactions
        .filter(transaction => 
        transaction.description.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase())
        )}/>
    </div>
  );
}

export default AccountContainer;
