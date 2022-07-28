import ReceiptItem from "./ReceiptItem";
import "./ReceiptList.css";

const ReceiptList = (props) => {
  return (
    <ul className="receipt-list">
      {props.receipts.map((rcpt) => (
        <ReceiptItem
          key={rcpt.id}
          // id={rcpt.id}
          date={rcpt.date}
          amount={rcpt.amount}
          paymode={rcpt.paymode}
          remarks={rcpt.remarks}
        />
      ))}
    </ul>
  );
};

export default ReceiptList;
