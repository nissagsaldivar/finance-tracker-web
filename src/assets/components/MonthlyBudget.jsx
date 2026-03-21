import { useEffect, useState } from "react";
import { useSpending } from "./SpendingContext";

export default function MonthlyBudgetPanel() {
  const {
    yearMonth,
    setYearMonth,
    budgetAmount,
    remaining,
    fetchData,
  } = useSpending();
  const [budgetInput, setBudgetInput] = useState("");

  useEffect(() => {
    if (budgetAmount != null) setBudgetInput(String(budgetAmount));
    else setBudgetInput("");
  }, [budgetAmount, yearMonth]);

  const saveBudget = () => {
    const n = Number(budgetInput);
    if (!Number.isFinite(n) || n < 0) return;
    fetch("http://localhost:3001/monthly-budget", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ yearMonth, amount: n }),
    }).then(() => fetchData());
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Monthly budget</h3>
      <div style={styles.row}>
        <label style={styles.label}>
          Month
          <input
            style={styles.input}
            type="month"
            value={yearMonth}
            onChange={(e) => setYearMonth(e.target.value)}
          />
        </label>
        <label style={styles.label}>
          Budget ($)
          <input
            style={styles.input}
            type="number"
            min={0}
            step={1}
            placeholder="Total for month"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
          />
        </label>
        <button
          type="button"
          style={{ ...styles.button, background: "#d4a5e8", alignSelf: "flex-end" }}
          onClick={saveBudget}
        >
          Save budget
        </button>
      </div>
      {remaining != null && (
        <p style={styles.hint}>
          Remaining this month:{" "}
          <strong style={remaining < 0 ? styles.over : undefined}>
            ${remaining}
          </strong>
          {remaining < 0 && " (over budget)"}
        </p>
      )}
      {budgetAmount == null && (
        <p style={styles.muted}>Set a budget to track what you have left.</p>
      )}
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
    flexWrap: "wrap",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    color: "#4a2040",
    fontSize: "12px",
    fontFamily: "Times New Roman, serif",
    flex: "1 1 140px",
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
    height: "42px",
    boxSizing: "border-box",
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
  hint: {
    margin: "14px 0 0",
    color: "#4a2040",
    fontFamily: "Times New Roman, serif",
    fontSize: "15px",
  },
  over: {
    color: "#b03030",
  },
  muted: {
    margin: "10px 0 0",
    color: "#8a6a80",
    fontFamily: "Times New Roman, serif",
    fontSize: "13px",
    fontStyle: "italic",
  },
};
