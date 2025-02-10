import { useEffect, useState, useMemo } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const HeatMapChart = ({ data }) => {

    const [options, setOptions] = useState({})

    const dataPoints = useMemo(() => {
        return data.dataPoints.map(({ name, values }) => ({
            type: "stackedBar100",
            showInLegend: true,
            name,
            indexLabel: "#percent%",
            toolTipContent: "{name}: #percent%",
            dataPoints: values.map(({label, value}) => ({label, y: value}))
        }))
    }, [data.dataPoints])

    useEffect(() => {
        setOptions({
            backgroundColor: "#14161A",
            animationEnabled: true,
            exportEnabled: false,
            theme: "dark2",
            legend: {
                horizontalAlign: 'center',
                verticalAlign: 'bottom'
            },
            toolTip: {
                shared: true
            },
            axisX: {
                labelFontColor:"#EBECF0",
                tickColor: "#6e7591",
                gridColor: "#6e7591",
                lineColor: "#6e7591",
                tickLength: 15
            },
            axisY: {
                suffix: "%",
                labelFontColor: "#EBECF0",
                tickColor: "#6e7591",
                gridColor: "#6e7591",
                lineColor: "#6e7591",
                tickLength: 15
            },
            data: dataPoints
        })
    }, [dataPoints])

    return (
        <CanvasJSChart options={options}></CanvasJSChart>
    )
}

export default HeatMapChart