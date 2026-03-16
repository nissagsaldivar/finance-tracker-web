import { createContext, useContext, useEffect, useState } from "react";

// create the context
const SpendingContext = createContext();

// this wraps your app and provides the data to all children
export function SpendingProvider({ children }) {
  const [data, setData] = useState([]);

  // sum all values in the data array
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const fetchData = () => {
    fetch("http://localhost:3001/finance-data")
      .then((res) => res.json())
      .then((res) => setData(res.items));
  };

  // fetch on mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SpendingContext.Provider value={{ data, fetchData, total }}>
      {children}
    </SpendingContext.Provider>
  );
}

// custom hook so any component can grab the data easily
export function useSpending() {
  return useContext(SpendingContext);
}