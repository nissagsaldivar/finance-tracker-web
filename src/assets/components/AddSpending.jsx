import { useState } from "react";
import { useSpending } from "./SpendingContext";

export default function AddSpending() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const { fetchData } = useSpending(); // grab fetchData from context instead of onAdd prop

  const handleSubmit = () => {
    if (!category || !amount) return;
    fetch("http://localhost:3001/finance-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, amount: Number(amount) }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchData(); // use fetchData from context instead of onAdd
        setCategory("");
        setAmount("");
      });
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Add An Item</h3>
      <div style={styles.row}>
        <input
          style={styles.input}
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button style={{ ...styles.button, background: "#e8a0bf" }} onClick={handleSubmit}>
          Add
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
  input: {
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