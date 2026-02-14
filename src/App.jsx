import { useState } from 'react'
import PieChart from './assets/components/piechart'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Finance Tracker</h1>
        <section style={{ marginTop: 40 }}>
          <h2>Spending Breakdown</h2>
          <PieChart />
        </section>
    </>
  )
}

export default App
