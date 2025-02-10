import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = ({ data }) => {

    const dataPoints = data.dataPoints.map((item) => ({"label": item['name'], "y": item['value']}))

    const options = {
        backgroundColor: "#14161A",
        animationEnabled: true,
        exportEnabled: false,
        theme: "dark2",
        axisX: {
            reversed: true,
            labelFontColor:"#EBECF0",
            tickColor: "#6e7591",
            gridColor: "#6e7591",
            lineColor: "#6e7591",
            tickLength: 15
        },
        axisY: {
            includeZero: true,
            labelFontColor: "#EBECF0",
            tickColor: "#6e7591",
            gridColor: "#6e7591",
            lineColor: "#6e7591",
            tickLength: 15
        },
        data: [{
          type: "bar",
          dataPoints
        }]
    }
    return (
        <CanvasJSChart options = {options}></CanvasJSChart>
    )
}

export default BarChart