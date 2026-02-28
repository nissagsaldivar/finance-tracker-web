import { useState } from "react";

export default function RemoveSpending({ data, onRemove }) {
  const [selected, setSelected] = useState("");

  const handleRemove = () => {
    if (!selected) return;

    fetch(`http://localhost:3001/finance-data/${selected}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        onRemove(); // refresh the chart
        setSelected("");
      });
  };

  return (
    <div>
      <h3>Remove Spending</h3>
      {/* dropdown populated from existing chart data */}
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">Pick a Category</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.id}
          </option>
        ))}
      </select>
      <button onClick={handleRemove}>Remove!</button>
    </div>
  );
}