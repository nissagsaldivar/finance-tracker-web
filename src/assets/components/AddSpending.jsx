import { useState } from "react";

export default function AddSpending({ onAdd }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    //add error handling and dont submit if fields are empty
    if (!category || !amount) return;

    //send the new item to my backend
    fetch("http://localhost:3001/finance-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, amount: Number(amount) }),
    })
      .then((res) => res.json())
      .then(() => {
        onAdd(); //tell the parent to refresh the chart
        setCategory(""); //clear the form
        setAmount("");
      });
  };

  return (
    <div>
      <h3>Add Spending</h3>
      <input
        type="text"
        placeholder="Category (e.g. Food)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}