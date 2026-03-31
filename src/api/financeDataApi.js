

// Stuff to get the finance data from the backend
export const getFinanceData = (yearMonth) => {
    const q = new URLSearchParams({ yearMonth });
    return fetch(`http://localhost:3001/finance-data?${q}`)
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
        return null;
      });
}

export const createFinanceCategory = (category, amount, yearMonth) => {
    return fetch("http://localhost:3001/finance-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, amount, yearMonth }),
    })
    .then((res) => res.json())
    .catch((err) => {
        console.error(err);
        return null;
    });
}

export const deleteFinanceCategory = (yearMonth, categoryName) => {
    const q = new URLSearchParams({ yearMonth });
    return fetch(
      `http://localhost:3001/finance-data/${encodeURIComponent(categoryName)}?${q}`,
      { method: "DELETE" }
    )
    .then((res) => res.json())

}