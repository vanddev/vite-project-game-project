import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DonutChart = ({ data }) => {

    const dataPoints = data.dataPoints.map(({name, value}) => ({ name, y: value}))

    const options = {
        backgroundColor: "#14161A",
        animationEnabled: true,
        exportEnabled: false,
        theme: "dark2",
        subtitles: [{
            text: data.center.toString(),
            verticalAlign: "center",
            fontSize: 30,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            startAngle: 0,
            indexLabel: "{name} ({y})",
            dataPoints
        }]
    };
  
    return (
        <CanvasJSChart options={options}/>
    )
}

export default DonutChart