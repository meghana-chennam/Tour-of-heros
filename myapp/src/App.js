import logo from './logo.svg';
import Dashboard from './Dashboard';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Signup from './Signup';
class App extends Component {
  
  state={
     id:'',
     password:'',
     name:'',
     redirect:false
  };

 
   
  // handleEvent()
  // {
  // console.log(userid),
  // console.log(upassword),
  // console.log(uname)
  // }
  login=async()=>{
    let id=document.getElementById("userid").value;
    let password=document.getElementById("upassword").value;
    let name=document.getElementById("uname").value;
    console.log(id)
     console.log(password)
     console.log(name)
     if(id=='')
     {
       alert("please enter id")
     }
     if(password=='')
     {
       alert("please enter password")
     }
     if(name=='')
     {
       alert("please enter name")
     }
      
     let details={}
     details['userid']=this.state.id;
     details['upassword']=this.state.password;
     details['uname']=this.state.name
     details['authToken']='null' 
    let res=await axios.post('http://localhost:9090/login',details)
     
    
    if(res.data=="success")
    {
      console.log("entered");
      this.setState({ redirect: true });
      
    }
    else{
      alert("wrong credentials")
      return
    }
  
    }

  

  //     'userid':'1',
	// 	'upassword':'12345',
	// 	'uname':'meghana',
  // 'authToken':null 
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   }, (error) => {
  //   console.log(error);
    
  handleChange = (e) =>{ this.setState({ 
    id: e.target.value}
    ) 
    console.log(this.state.id)
}
 handleChange1=(e1)=>{this.setState({
     password:e1.target.value}
     )
     console.log(this.state.password)
 }
 handleChange2 = (e2) =>{ this.setState({ 
     name: e2.target.value}
  ) 
  console.log(this.state.name)
}


  
  


 

 render()
 {
  const { redirect } = this.state;

  if (redirect) {
    return <Redirect to='/dashboard'/>;
  }
  
  return (

    <div className="App"style={{ backgroundImage: "url(heros.png)",height:5000 }}>
  
      
       <h1>Have A look!.. at tour of heros</h1>
         
            {/* <div className="textboxeslogin">
                     <label for="userid">userid</label>
                     <input type="text" id="userid" value={this.state.id} onChange={this.handleChange}></input><br/>
                     <label for="upass">password</label>
                     <input type="text" id="upassword" value={this.state.password} onChange={this.handleChange1}></input><br></br>
                     <label for="uname">name</label>
                     <input type="text" id="uname" value={this.state.name} onChange={this.handleChange2}></input><br></br>
                     {/* <div className="modallogin"><input type="submit">login</input> </div>   
                 
            </div> */}
            
                 <div className="card" >  
                 <div className="upass">  <label for="userid">userid</label></div>
                 <div className="userid">    <input type="text" id="userid" value={this.state.id} onChange={this.handleChange}></input><br/> </div> 
                   <div className="pass">  <label for="upass">password</label>  </div> 
                   <div className="userid">       <input type="text" id="upassword" value={this.state.password} onChange={this.handleChange1}></input><br></br></div>
                    
                   <Input className="userlabel"
                       //id="input-with-icon-adornment"
                       id="uname" value={this.state.name} onChange={this.handleChange2} placeholder="username"
                          startAdornment={
                          <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                              }
                        />

                 

                    </div>
                    <div className="login">   <input type="submit"  className="btn btn-primary" value="login" onClick={this.login}/> </div>
                       
                          <div className="signuphead" >  <h5>not registered let signup here..</h5> </div> 



                    <div className="signup">   <Link to={"/signup"}> <input className="btn btn-primary" type="submit" value="signup" /> </Link> </div>

          

                  



            
            
    </div>
    
    
     );
   }
}


export default App;
