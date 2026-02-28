import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";
import AddSpending from "./AddSpending"; // import the AddSpending capability
import RemoveSpending from "./RemoveSpending"; // import the RemoveSpending capability

export default function PieChart() {
  const [data, setData] = useState([]);

  // pull this out so we can call it again after adding
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
    <div>
      {}
      <AddSpending onAdd={fetchData} />
      <RemoveSpending data={data} onRemove={fetchData} />
      {}
      <div style={{ height: 400 }}>
        <ResponsivePie
          data={data}
          colors={{ scheme: "pastel1" }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          legends={[{
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 80,
            itemHeight: 18,
            symbolSize: 18,
          }]}
        />
      </div>
    </div>
  );
}