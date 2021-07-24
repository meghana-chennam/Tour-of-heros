
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';  
import axios from 'axios'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { propTypes } from 'react-bootstrap/esm/Image';
import routerhead from './routerhead';
import { useHistory } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
  
  import Modaltest from './Modaltest';
class Dashboard extends React.Component
{  
   
  
   state = {
    dict : {},
      dashboard_heading:'Top Heroes',
      dashboard_list:{},
      myvalue:''
      
    };
    

  


 componentDidMount() {
  this.showdashboardlist()
}
 showdashboardlist=async()=>{
  this.state.dashboard_heading="Top Heroes"
  this.state.hero_heading=""
  this.state.heroes_list={}
  let res= await axios.get('http://localhost:9090/topheros')
  console.log("clicked")
 this.setState({dashboard_list:res.data})
}

 
 
    
   
   render() {
      return (
        
        <div className="bt">
          
           <h1 className="header">Tour of heros</h1>
           <div>
           <button class="btn btn-secondary"className="dashbutton" onClick={this.showdashboardlist}>Dashboard</button>
           {/* <button class="btn btn-secondary"className="herobutton" onClick={this.showheroeslist}>Heros</button> */}
           <Link to="/heros" ><button className="herolink" type="button">
           Heros
     </button></Link> 
           </div>
           
          
           <h3>{this.state.dashboard_heading}</h3>
           <h3>{this.state.hero_heading}</h3>
          <ul className='rowC'>
          {/* {this.state.heroes_list.map(([k,v])=><button key={k}>{v}</button>)} */}
          <ul className="dashbuttons"> {Object.entries(this.state.dashboard_list).map(([k,v])=>(<button key={k}>{v['fname']}</button>))}
            
        
          </ul>
            </ul>
           
         
         
        
            
         
         </div>
         
         
      );
    }
      
}
export default withRouter(Dashboard);

