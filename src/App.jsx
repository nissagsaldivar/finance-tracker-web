import PieChart from './assets/components/piechart'
import { SpendingProvider, useSpending } from './assets/components/SpendingContext'
import './App.css'

function Total() {
  const { totalSpent, budgetAmount, remaining } = useSpending();
  return (
    <div style={{
      background: "#fdf0f8",
      border: "1px solid #e8c4d8",
      borderRadius: "16px",
      padding: "20px 24px",
      marginTop: "12px",
      fontFamily: "Times New Roman, serif",
      color: "#4a2040",
      fontSize: "17px",
      letterSpacing: "0.03em",
    }}>
      <div style={{ fontStyle: "italic", color: "#c2527a", marginBottom: "8px" }}>
        Total spent: <strong>${totalSpent}</strong>
      </div>
      {budgetAmount != null && (
        <div style={{ fontSize: "15px", marginTop: "4px" }}>
          Budget: ${budgetAmount}
          {remaining != null && (
            <span style={{ marginLeft: "12px", color: remaining < 0 ? "#b03030" : "#2d6a4f" }}>
              Remaining: ${remaining}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <SpendingProvider>
      <h1>Finance Tracker</h1>
      <section style={{ marginTop: 40 }}>
        <h2>Spending Breakdown</h2>
        <PieChart />
        <Total />
      </section>
    </SpendingProvider>
  )
}

export default App