import React from 'react';
import './App.css';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
  const [height, setHeight] = React.useState(0);
  const [e, setE] = React.useState(0);
  const [mapData, setData] = React.useState([]);

  const getData = (h, e) => {
    fetch(`http://localhost:3000/coordinates?height=${h}&e=${e}`, {
      method: 'GET',
    }).then((result) => {
      return result.json();
    }).then((result) => {
      console.log(result);
      setData(result);
    }).catch((e) => {
      console.log(e);
    });
  }

  const options = {
    animationEnabled: true,
    title:{
      text: "D-T Graph"
    },
    axisX: {
      title: "Time",
      valueFormatString: "##"
    },
    axisY: {
      title: "Height",
      includeZero: false
    },
    data: [{
      type: "spline",
      dataPoints: mapData
    }]
  }

  return (
      <div>
        <div className="form">
          <label htmlFor="height">Height: </label>
          <input
              id="height"
              className="input"
              value={height}
              type="number"
              onChange={(e) => setHeight(e.target.value)}
          />
          <label htmlFor="e">Elasticity: </label>
          <input
              id="e"
              className="input"
              value={e}
              type="range"
              min="0"
              max="10"
              onChange={(e) => setE(e.target.value)}
          />
          <button onClick={() => getData(height, e / 10)}>Submit</button>
        </div>
        <CanvasJSChart options = {options}
        />
      </div>
  );
}

export default App;




