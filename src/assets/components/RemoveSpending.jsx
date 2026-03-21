import { useState } from "react";
import { useSpending } from "./SpendingContext";

export default function RemoveSpending() {
  const [selected, setSelected] = useState("");
  const { data, fetchData, yearMonth } = useSpending();

  const handleRemove = () => {
    if (!selected) return;
    const q = new URLSearchParams({ yearMonth });
    fetch(
      `http://localhost:3001/finance-data/${encodeURIComponent(selected)}?${q}`,
      { method: "DELETE" }
    )
      .then((res) => res.json())
      .then(() => {
        fetchData();
        setSelected("");
      });
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Remove An Item</h3>
      <div style={styles.row}>
        <select
          style={styles.select}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">Select a category</option>
          {data.map((item) => (
            <option key={item.id} value={item.id}>{item.id}</option>
          ))}
        </select>
        <button style={{ ...styles.button, background: "#f4a7b9" }} onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fdf0f8",
    border: "1px solid #e8c4d8",
    borderRadius: "16px",
    padding: "20px 24px",
    marginBottom: "12px",
  },
  title: {
    color: "#c2527a",
    fontSize: "14px",
    fontFamily: "Times New Roman, serif",
    fontStyle: "italic",
    letterSpacing: "0.05em",
    marginBottom: "12px",
  },
  row: {
    display: "flex",
    gap: "10px",
    alignItems: "stretch",
  },
  select: {
    background: "#fff",
    border: "1px solid #e8c4d8",
    borderRadius: "10px",
    color: "#4a2040",
    padding: "10px 14px",
    fontSize: "14px",
    fontFamily: "Times New Roman, serif",
    outline: "none",
    flex: 1,
    height: "42px",
    cursor: "pointer",
  },
  button: {
    color: "#4a2040",
    border: "none",
    borderRadius: "10px",
    padding: "0 24px",
    fontSize: "14px",
    fontFamily: "Times New Roman, serif",
    fontWeight: "bold",
    cursor: "pointer",
    height: "42px",
  },
};