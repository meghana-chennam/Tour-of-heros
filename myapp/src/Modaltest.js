import React from 'react';
import { BrowserRouter as Router,Link,Route, } from "react-router-dom"; 
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {Alert} from 'react-bootstrap'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import routerhead from './routerhead';

 class Modaltest extends React.Component {
     
    state = {
        dict : {},
      heroes_list: {},
      hero_heading:'',
       myvalue:'',
       myvalue1:''
    };


    
          
        
        updateitem=async()=>{
        let fname={}
        fname['id']=this.props.location.data
        //fname['id']=this.state.myvalue
        fname['fname']=this.state.myvalue1
        console.log(fname)
          await axios.put('http://localhost:9090/heros',fname)
          
          this.state.myvalue=''
          this.state.myvalue1=''
          alert('updated successfully');
          let res= await axios.get('http://localhost:9090/heros')
           
          this.setState({heroes_list:res.data})
           
    }


    handleChange = (e) =>{ this.setState({ 
        myvalue: e.target.value}
        ) 
        console.log(this.state.myvalue)
    }
     handleChange1=(e1)=>{this.setState({
         myvalue1:e1.target.value}
         )
         console.log(this.state.myvalue1)
     }




     render(){
       return(
         
        
       
    
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Update hero details</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...<div className="update-heroid-label"> <label for="input element">HeroId</label></div>
           
           <div className="update-heroid">
           <TextField
           
           id="input-with-icon-textfield"
            value={this.props.location.data} 
           //value = {this.state.myvalue}
           onChange={this.handleChange}
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                
               </InputAdornment>
             ),
           }}
         /><br></br> </div>
   
   
   
   
   
           <div className="update-heroname-label">  <label for="input element">HeroName</label></div>
              
              <div className="update-heroname">
              <TextField
           
           id="input-with-icon-textfield"
            value={this.state.myvalue1}
           onChange={this.handleChange1}
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                 <AccountCircle />
               </InputAdornment>
             ),
           }}
         /><br></br></div> 
     
     <div className="hero-update-button"><input class="btn btn-secondary" type="submit" value="update" onClick={this.updateitem}/></div>
   
     <div className="hero-back-button"><Link to={"/Heros"}><input class="btn btn-secondary" type="submit" value="back" /></Link></div>
      <Router>
        <Route><routerhead/></Route>
      </Router>
   
               </div>
               
   
        </div>
        
      
    </div>
    </div>    
    
  
      );
    }
 }
 export default withRouter(Modaltest);