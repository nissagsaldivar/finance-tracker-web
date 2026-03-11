import { useState } from 'react'
import PieChart from './assets/components/piechart'
import { SpendingProvider } from './assets/components/SpendingContext'
import './App.css'


function App() {
  return (
    <SpendingProvider>
      <h1>Finance Tracker</h1>
      <section style={{ marginTop: 40 }}>
        <h2>Spending Breakdown</h2>
        <PieChart />
      </section>
    </SpendingProvider>
  )
}

export default App