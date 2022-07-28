import React, { useState } from "react";
import "./ReceiptForm.css";

const ReceiptForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredPaymode, setEnteredPaymode] = useState("");
  const [enteredRemarks, setEnteredRemarks] = useState("");

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const paymodeChangeHandler = (e) => {
    setEnteredPaymode(e.target.value);
  };

  const remarksChangeHandler = (e) => {
    setEnteredRemarks(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const receiptData = {
      // date: new Date(enteredDate),
      id: Math.random().toString(),
      date: enteredDate,
      amount: +enteredAmount,
      paymode: enteredPaymode,
      remarks: enteredRemarks,
    };

    props.onAddReceipt(receiptData);
    setEnteredDate("");
    setEnteredAmount("");
    setEnteredPaymode("");
    setEnteredRemarks("");
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div>
        <p className="from-p">Receipt Details</p>
      </div>
      <div>
        <div className="form-inputs">
          <label>Date*</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            placeholder="Enter Date"
            className="form-input"
          />
        </div>
        <div className="form-inputs">
          <label>Amount*</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
            placeholder="Enter Amount (in INR)"
            className="form-input"
          />
        </div>
        <div className="form-inputs">
          <label>Payment Mode*</label>
          <select
            className="form-input"
            value={enteredPaymode}
            onChange={paymodeChangeHandler}
          >
            <option>Phonepe</option>
            <option>Cash</option>
            <option>Net Banking</option>
          </select>
        </div>
        <div className="form-inputs">
          <label>Remarks</label>
          <input
            type="text"
            value={enteredRemarks}
            onChange={remarksChangeHandler}
            placeholder="Enter Remarks"
            className="form-input"
          />
        </div>
      </div>
      <div className="btns">
        <button type="button" className="btn cancel">
          Cancel
        </button>
        <button type="submit" className="btn submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReceiptForm;
