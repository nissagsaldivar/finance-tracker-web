import { useState } from "react";
import { useSpending } from "./SpendingContext";

// this component is used to add a spending item to the chart, AKA AddSpending
export default function AddSpending({ onAdd }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const { fetchData } = useSpending(); // grab fetchData from context

  const handleSubmit = () => {
    // add error handling, basically dont submit if the two requiredfields are empty
    if (!category || !amount) return;

    // send the new item to the backend
    fetch("http://localhost:3001/finance-data", {
      method: "POST", // this is the method of the fetch request
      headers: { "Content-Type": "application/json" }, // this is the header of the fetch request
      body: JSON.stringify({ category, amount: Number(amount) }), 
    })
      .then((res) => res.json())
      .then(() => {
        fetchData(); // this is the function that is called when the fetch request is successful
        setCategory(""); // sets the category to an empty string
        setAmount(""); // sets the amount to an empty string
      });
  };

  // this return will now use the context to add a spending item to the chart
  return (
    <div>
      <h3>Add Spending</h3> //
      <input type="text" placeholder="Category" value={category} onChange={(event) => setCategory(event.target.value)} /> 
      <input type="number" placeholder="Amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}