import PieChart from './piechart'
import { SpendingProvider } from './SpendingContext'
import Total from './Total'

export default function Home() {
    return (
        <>
            <h1>Finance Tracker</h1>
            <section style={{ marginTop: 40 }}>
                <h2>Spending Breakdown</h2>
                <SpendingProvider>
                    <PieChart />
                    <Total />
                </SpendingProvider>
            </section>
        </>
    )
}