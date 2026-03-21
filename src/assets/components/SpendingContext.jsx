import { createContext, useCallback, useContext, useEffect, useState} from "react";

function defaultYearMonth() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

const SpendingContext = createContext();

export function SpendingProvider({ children }) {
  const [yearMonth, setYearMonth] = useState(defaultYearMonth);
  const [data, setData] = useState([]);
  const [budgetAmount, setBudgetAmount] = useState(null);
  const [remaining, setRemaining] = useState(null);
  const [totalSpent, setTotalSpent] = useState(0);

  const fetchData = useCallback(() => {
    const q = new URLSearchParams({ yearMonth });
    return fetch(`http://localhost:3001/finance-data?${q}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.items ?? []);
        if (res.yearMonth) setYearMonth(res.yearMonth);
        setBudgetAmount(
          res.budgetAmount === undefined || res.budgetAmount === null
            ? null
            : res.budgetAmount
        );
        setRemaining(
          res.remaining === undefined || res.remaining === null
            ? null
            : res.remaining
        );
        setTotalSpent(
          typeof res.totalSpent === "number" ? res.totalSpent : 0
        );
      });
  }, [yearMonth]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SpendingContext.Provider
      value={{
        data,
        fetchData,
        yearMonth,
        setYearMonth,
        budgetAmount,
        remaining,
        totalSpent,
      }}
    >
      {children}
    </SpendingContext.Provider>
  );
}

export function useSpending() {
  return useContext(SpendingContext);
}
