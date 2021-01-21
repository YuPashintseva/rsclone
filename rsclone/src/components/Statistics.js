import React from 'react';
import Chart from "react-google-charts";

class Statistics extends React.Component {
    constructor(){
        super();
        this.state={
         data: JSON.parse(sessionStorage.getItem('fullInf')),
         current:'',
         switcher:0,
        };
       
    }
 
   componentDidMount(){
     this.setState({current: this.bestRatings()});
     
   }

    switch(){
      let sw = this.state.switcher;
      if(sw===0)this.setState({current:this.bestRatings()});
      else this.setState({current:this.mostOftenSeen()});
    }
    bestRatings() {
      let all = this.state.data;
      all.sort((a,b)=>parseFloat(b.vote_average)-parseFloat(a.vote_average));
      all = all.slice(0,5);
      all = all.map(el=>[el.original_title,parseFloat(el.vote_average)]);
      all.unshift(['Film','Rating']);
      return all;
    }
    mostOftenSeen() {
      let all = this.state.data;
      all.sort((a,b)=>parseFloat(b.popularity)-parseFloat(a.popularity));
      all = all.slice(0,5);
      all = all.map(el=>[el.original_title,parseFloat(el.popularity)]);
      all.unshift(['Film','Popularity']);
      return all;
    }
        render () {
            return (

             <div id = 'st' className = 'container-fluid'>
               <div className='row' style={{margin: '1%'}}>
              <button id = 'bestRatings' onClick={()=>this.setState({switcher:0})}>Best Ratings</button>
              <button id = 'mostOftenSeen' onMouseUp={()=>this.setState({switcher:1})}>Most Often Seen</button>
              <button id = 'mostRecent' >Most Recent</button>
              <button id = 'youWereInterested' >You Were Interested</button>
              </div>
              <div id = 'columnchart_values' style={{height:'90vh', backgroundColor: 'white', padding: '2%'}}>
              
  <Chart 
              
  width={'100%'}
  height={'95%'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={this.state.switcher===0?this.bestRatings():this.mostOftenSeen()}

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


    /*[
    ['Film', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ]
  */