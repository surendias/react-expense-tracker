import React from "react";

function ExpenseItem({ expenseItem: { id, description, amount, timestamp } }) {
  return (
    <div
      className="p-8 m-5 border-4 border-solid rounded border-white-400"
      key={id}
    >
      <strong>
        {description}: LKR {amount}
      </strong>
      <br />
      <span>{timestamp}</span>
    </div>
  );
}

export default ExpenseItem;
