import React from 'react';
import Chart from "react-google-charts";

class Statistics extends React.Component {
    constructor(){
        super();
    }
        render () {
            return (
             <div id = 'st' className = 'container-fluid'>
               <div className='row' style={{margin: '1%'}}>
              <button id = 'bestRatings' >bestRatings</button>
              <button id = 'mostOftenSeen' >mostOftenSeen</button>
              <button id = 'mostRecent' >mostRecent</button>
              <button id = 'youWereInterested' >youWereInterested</button>
              </div>
              <div id = 'columnchart_values' style={{height:'60vh', backgroundColor: 'white', padding: '2%'}}>
              
  <Chart
              
  width={'100%'}
  height={'95%'}
  chartType="Bar"
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
  
    chart:{
    title: 'Population of Largest U.S. Cities',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    
  
    },
    
  }}
  // For tests
  rootProps={{ 'data-testid': '1' }}
/>
            </div>
             </div>
            )
        }
         
    }
    export default Statistics;