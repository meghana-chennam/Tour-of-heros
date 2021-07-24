import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Redirect } from 'react-router-dom';
class Signup extends Component{

    state={
        id:'',
        password:'',
        name:'',
        redirect:false
     };

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
        let res=await axios.post('http://localhost:9090/adduser',details)
         
        console.log(res.data)
        if(res.data=="login")
        {
          console.log("entered");
          this.setState({ redirect: true });
          alert("you can login now")
          
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
    return <Redirect to='/'/>;
  }
  
        return(
            <div>
                <h1>let signup</h1>


                <div className="card" >  
                 <label for="userid">userid</label>
                     <input type="text" id="userid" value={this.state.id} onChange={this.handleChange}></input><br/>
                     <label for="upass">password</label>
                     <input type="text" id="upassword" value={this.state.password} onChange={this.handleChange1}></input><br></br>
                    
                   <Input
                       //id="input-with-icon-adornment"
                       id="uname" value={this.state.name} onChange={this.handleChange2} placeholder="username"
                          startAdornment={
                          <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                              }
                        />

                 <input type="submit" value="signup" onClick={this.login}/>

                    </div>

            </div>

        );
    }
}

export default withRouter(Signup);