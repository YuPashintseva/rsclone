import React from 'react';
import Chart from "react-google-charts";

class Statistics extends React.Component {
    constructor(){
        super();
    }
        render () {
            return (
             <div id = 'st' className = 'container-fluid'>
              <div id = 'bestRatings'></div>
              <div id = 'mostOftenSeen'></div>
              <div id = 'mostRecent'></div>
              <div id = 'youWereInterested'></div>
              <div id = 'columnchart_values' style={{ width: "900px", height: "300px" }}></div>
              <Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ]}
  options={{
    title: 'Population of Largest U.S. Cities',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
    vAxis: {
      title: 'City',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '1' }}
/>
             </div>
            )
        }
         
    }
    export default Statistics;