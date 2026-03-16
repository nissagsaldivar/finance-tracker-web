import PieChart from './assets/components/piechart'
import { SpendingProvider, useSpending } from './assets/components/SpendingContext'
import './App.css'

function Total() {
  const { total } = useSpending();
  return (
    <div style={{
      background: "#fdf0f8",
      border: "1px solid #e8c4d8",
      borderRadius: "16px",
      padding: "20px 24px",
      marginTop: "12px",
      fontFamily: "Times New Roman, serif",
      fontStyle: "italic",
      color: "#c2527a",
      fontSize: "20px",
      letterSpacing: "0.05em",
    }}>
      Total Spent: ${total}
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