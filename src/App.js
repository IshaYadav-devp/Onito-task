import React, { useState } from "react";

import ReceiptForm from "./Components/ReceiptForm";
import ReceiptList from "./Components/ReceiptList";
import "./App.css";

const Dummy_Receipt = [
  {
    id: "r1",
    date: "July 28th, 2022",
    amount: 99,
    paymode: "Cash",
    remarks: "Phone Recharge",
  },
];

function App() {
  const [receiptDetails, setReceiptDetails] = useState(Dummy_Receipt);

  const addReceiptHandler = (receipts) => {
    setReceiptDetails((prevReceipts) => {
      return [receipts, ...prevReceipts];
    });
    console.log(receipts);
  };

  return (
    <div className="app">
      <ReceiptForm onAddReceipt={addReceiptHandler} />
      <ReceiptList receipts={receiptDetails} />
    </div>
  );
}

export default App;
