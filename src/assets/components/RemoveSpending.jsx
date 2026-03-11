import { useState } from "react";
import { useSpending } from "./SpendingContext";

// this component is used to remove a spending item from the chart, AKA RemoveSpending!
export default function RemoveSpending() {
  const [selected, setSelected] = useState("");
  const { data, fetchData } = useSpending(); // grab data and fetchData from context


  // this is the function thats used to remove the spending item from the chart
  const handleRemove = () => {
    if (!selected) return;

    // this is the fetch request to remove the spending item from the chart
    fetch(`http://localhost:3001/finance-data/${selected}`, {
      method: "DELETE",
    })
      // this is the response from the fetch request
      .then((res) => res.json())
      // this is the function that is called when the fetch request is successful
      .then(() => {
        fetchData(); // refresh the chart on deletion
        setSelected("");
      });
  };

  // this return will now use context to remove a spending item from the chart
  return (
    <div>
      <h3>Remove Spending</h3>
      <select value={selected} onChange={(event) => setSelected(event.target.value)}>
        <option value="">Pick a Category</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>{item.id}</option>
        ))}
      </select>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}