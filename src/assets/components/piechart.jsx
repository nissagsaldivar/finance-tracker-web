import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";

export default function PieChart() {
  //store the chart data from the backend
  const [data, setData] = useState([]);

  //get data from the backend when the component loads
  useEffect(() => {
    fetch("http://localhost:3001/finance-data") //hit the api's endpoint, 3001
      .then((res) => res.json()) //get a JSON responseresponse
      .then((res) => setData(res.items)); //get what's coming from the api's array and save to state
  }, []); //empty array = only runs once on mount (claude suggestion)

  return (
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
  );
}