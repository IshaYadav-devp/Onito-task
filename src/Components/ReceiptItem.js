import "./ReceiptItem.css";

const ReceiptItem = (props) => {
  return (
    <li className="item-list">
      <div className="items">
        <div>Date: {props.date}</div>
        <div>Payment Mode: {props.paymode}</div>
        <div>Amount: {props.amount}</div>
      </div>
      <div className="remarks">Remarks: {props.remarks}</div>
    </li>
  );
};

export default ReceiptItem;
