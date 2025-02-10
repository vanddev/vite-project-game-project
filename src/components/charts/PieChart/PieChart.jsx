import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = ({ data }) => {

    const dataPoints = data.dataPoints.map(({name, value}) => ({label: name, y: value}))

    const options = {
      backgroundColor: "#14161A",
      animationEnabled: true,
      exportEnabled: false,
      theme: "dark2",
      data: [{
        type: "pie",
        showInLegend: false,
        legendText: "{label}",
        toolTipContent: "{label}: {y}%",
        indexLabel: "{label}",
        indexLabelFontColor: "#EBECF0",
        dataPoints
      }]
    }
  return (
    <CanvasJSChart options={options}></CanvasJSChart>
  )
}

export default PieChart