import { ResponsivePie } from "@nivo/pie";

const data = [
    {id: 'Food', value: 300},
    {id: 'Rent', value: 1650}
]

export default function PieChart(){
    return (
        <div style= {{ height: 400}}>
            <ResponsivePie
                data = {data}
                colors={{ scheme: 'pastel1'}}
                margin = {{ top: 40, right: 80, bottom: 80, left: 80}}
                innerRadius={ 0.5 }
                padAngle={ 0.7 }
                cornerRadius={ 3 }
                activeOuterRadiusOffset={ 8 }
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        translateY: 56,
                        itemWidth: 80,
                        itemheight: 18,
                        symbolSize: 18,
                    },
                ]}
            />
        </div>
    )
}