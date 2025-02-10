import CanvasJSReact from '@canvasjs/react-charts';
import { useEffect, useMemo, useState } from 'react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



const StackedBarChart = ({ data }) => {


    const [options, setOptions] = useState({})

    const dataPoints = useMemo(() => {
        return data.dataPoints.map(({name, values}) => ({
            type: "stackedBar",
            showInLegend: "true",
            name,
            dataPoints: values.map(({label, value}) => ({label, y: value}))
        }))
    }, [data.dataPoints])
    
    const toggleDataSeries = (e) => {
        // Ensure we toggle the visibility of the data series
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        
        // Re-render the chart to reflect the changes
        e.chart.render();
    }

    useEffect(() => {
        setOptions({
            backgroundColor: "#14161A",
            animationEnabled: true,
            exportEnabled: false,
            theme: "dark2",
            axisX: {
                labelFontColor:"#EBECF0",
                tickColor: "#6e7591",
                gridColor: "#6e7591",
                lineColor: "#6e7591",
                tickLength: 15,
                interval: 1
            },
            axisY: {
                labelFontColor: "#EBECF0",
                tickColor: "#6e7591",
                gridColor: "#6e7591",
                lineColor: "#6e7591",
                interlacedColor: "#16191d",
                tickLength: 15
            },
            toolTip: {
                shared: true
            },
            legend:{
                cursor: "pointer",
                fontColor: "#EBECF0",
                itemclick: toggleDataSeries
            },
            data: dataPoints
        })
    }, [dataPoints])

    return (
        <CanvasJSChart options={options}></CanvasJSChart>
    )
}

export default StackedBarChart