import { ResponsivePie } from "@nivo/pie";
import { useSpending } from "./SpendingContext";
import { useEffect, useState } from "react";
import AddSpending from "./AddSpending"; // import the AddSpending capability
import RemoveSpending from "./RemoveSpending"; // import the RemoveSpending capability
import MonthlyBudget from "./MonthlyBudget";

export default function PieChart() {
  // grab data directly from context instead of managing it here
  const { data } = useSpending();

  return (
    <div>
      <MonthlyBudget />
      <AddSpending />
      <RemoveSpending />
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