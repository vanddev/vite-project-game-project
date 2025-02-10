import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import PieChart from '../../components/charts/PieChart/PieChart';
import StackedBarChart from '../../components/charts/StackedBarChart/StackedBarChart';
import BarChart from '../../components/charts/BarChart/BarChart';
import HeatMapChart from '../../components/charts/HeatMapChart/HeatMapChart';
import DonutChart from '../../components/charts/DonutChart/DonutChart';


const StatisticsPage = () => {

  const pieData = {
    dataPoints: [
      { value: 4, name: "Pinball" },
      { value: 5, name: "Adventure" },
      { value: 6, name: "Indie" },
      { value: 5, name: "Arcade" },
      { value: 4, name: "Visual Novel" },
      { value: 3, name: "Card & Board Game" },
      { value: 7, name: "MOBA" },
      { value: 3, name: "Point-and-click" },
      { value: 4, name: "Fighting" },
      { value: 6, name: "Shooter" },
      { value: 2, name: "Music" },
      { value: 4, name: "Platform" },
      { value: 4, name: "Puzzle" },
      { value: 5, name: "Racing" },
      { value: 6, name: "Real Time Strategy (RTS)" },
      { value: 4, name: "Role-playing (RPG)" },
      { value: 3, name: "Simulator" },
      { value: 2, name: "Sport" },
      { value: 3, name: "Strategy" },
      { value: 3, name: "Turn-based strategy (TBS)" },
      { value: 4, name: "Tactical" },
      { value: 4, name: "Hack and slash/Beat 'em up" },
      { value: 2, name: "Quiz/Trivia" }
    ]
  }

  const stackedBarData = {
    dataPoints: [
      {
        name: "Jogados",
        values: [
          {
            label: "PSP",
            value: 56
          },
          {
            label: "PS1",
            value: 45
          },
          {
            label: "PS2",
            value: 71
          },
          {
            label: "PSVita",
            value: 41
          },
          {
            label: "DS",
            value: 60
          },
          {
            label: "3DS",
            value: 75
          },
          {
            label: "GBA",
            value: 98
          }
        ]
      },
      {
        name: "Não Jogados",
        values: [
          {
            label: "PSP",
            value: 86
          },
          {
            label: "PS1",
            value: 95
          },
          {
            label: "PS2",
            value: 71
          },
          {
            label: "PSVita",
            value: 58
          },
          {
            label: "DS",
            value: 60
          },
          {
            label: "3DS",
            value: 65
          },
          {
            label: "GBA",
            value: 89
          }
        ]
      },
      {
        name: "Finalizados",
        values: [
          {
            label: "PSP",
            value: 48
          },
          {
            label: "PS1",
            value: 45
          },
          {
            label: "PS2",
            value: 41
          },
          {
            label: "PSVita",
            value: 55
          },
          {
            label: "DS",
            value: 80
          },
          {
            label: "3DS",
            value: 85
          },
          {
            label: "GBA",
            value: 83
          }
        ]
      },
    ]
  }

  const barData = {
      dataPoints: [
        {
          name: "PSP",
          value: 48
        },
        {
          name: "PS1",
          value: 45
        },
        {
          name: "PS2",
          value: 41
        },
        {
          name: "PSVita",
          value: 55
        },
        {
          name: "DS",
          value: 80
        },
        {
          name: "3DS",
          value: 85
        },
        {
          name: "GBA",
          value: 83
        }
      ]
  }

  const heatMapData = {
    dataPoints: [
      {
        name: "Indie",
        values: [
          {
            label: "PSP",
            value: 15
          },
          {
            label: "PS1",
            value: 12
          },
          {
            label: "PS2",
            value: 18
          },
          {
            label: "PSVita",
            value: 9
          },
          {
            label: "DS",
            value: 11
          },
          {
            label: "3DS",
            value: 20
          },
          {
            label: "GBA",
            value: 15
          }
        ]
      },
      {
        name: "Fighting",
        values: [
          {
            label: "PSP",
            value: 14
          },
          {
            label: "PS1",
            value: 17
          },
          {
            label: "PS2",
            value: 13
          },
          {
            label: "PSVita",
            value: 8
          },
          {
            label: "DS",
            value: 19
          },
          {
            label: "3DS",
            value: 12
          },
          {
            label: "GBA",
            value: 17
          }
        ]
      },
      {
        name: "Role-playing (RPG)",
        values: [
          {
            label: "PSP",
            value: 16
          },
          {
            label: "PS1",
            value: 11
          },
          {
            label: "PS2",
            value: 14
          },
          {
            label: "PSVita",
            value: 10
          },
          {
            label: "DS",
            value: 19
          },
          {
            label: "3DS",
            value: 18
          },
          {
            label: "GBA",
            value: 12
          }
        ]
      },
      {
        name: "Hack and slash",
        values: [
          {
            label: "PSP",
            value: 13
          },
          {
            label: "PS1",
            value: 20
          },
          {
            label: "PS2",
            value: 8
          },
          {
            label: "PSVita",
            value: 14
          },
          {
            label: "DS",
            value: 17
          },
          {
            label: "3DS",
            value: 11
          },
          {
            label: "GBA",
            value: 17
          }
        ]
      },
      {
        name: "Shooter",
        values: [
          {
          label: "PSP",
          value: 9
          },
          {
            label: "PS1",
            value: 22
          },
          {
            label: "PS2",
            value: 13
          },
          {
            label: "PSVita",
            value: 18
          },
          {
            label: "DS",
            value: 14
          },
          {
            label: "3DS",
            value: 11
          },
          {
            label: "GBA",
            value: 13
          }
        ] 
      },
      {
        name: "Adventure",
        values: [
          {
            label: "PSP",
            value: 10
          },
          {
            label: "PS1",
            value: 19
          },
          {
            label: "PS2",
            value: 16
          },
          {
            label: "PSVita",
            value: 12
          },
          {
            label: "DS",
            value: 14
          },
          {
            label: "3DS",
            value: 11
          },
          {
            label: "GBA",
            value: 18
          }
        ]
      },
    ]
  }

  const donutChartData = {
    dataPoints: [
        {"name": "Finalizados", "value": 630},
        {"name": "Jogados", "value": 2450}
    ],
    center: 3080
  }

  return (
    <>
      <h3>Total de Jogos</h3>
      <DonutChart data={donutChartData}></DonutChart>
      <h3>Jogos Por Genero</h3>
      <PieChart data={pieData}></PieChart>
      <h3>Jogos Jogados/Finalizados/Nao Por Plataforma</h3>
      <StackedBarChart data={stackedBarData}></StackedBarChart>
      <h3>Jogos Finalizados / Plataforma</h3>
      <BarChart data={barData}></BarChart>
      <h3>Jogos Finalizados Por Genero Por Plataforma</h3>
      <HeatMapChart data={heatMapData}></HeatMapChart>
      {/* <CanvasJSChart options = {options}/> */}
    </>
  )
}

export default StatisticsPage