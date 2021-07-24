import React from 'react';
import axios from 'axios'
// import Button from '@material-ui/core/Button';
import {Switch} from 'react-router-dom'
import User from './User'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Modaltest from './Modaltest';
import {withRouter} from 'react-router-dom'
class routerhead extends React.Component
{  
   
  
   state = {
    dict : {},
      heroes_list: {},
      hero_heading:'',
       myvalue:'',
       myvalue1:''
    };
    showheroeslist = async () =>{
        this.state.dashboard_list={}
        this.state.dashboard_heading=""
        this.state.hero_heading="My Heros"
        let res= await axios.get('http://localhost:9090/heros')
         console.log("clicked")
         console.log(res.data)
        this.setState({heroes_list:res.data})
        
      
       }  
       componentDidMount() {
        this.showheroeslist()
      }
      // updateitem=async()=>{
      //   let fname={}
      //   fname['fname']=this.state.myvalue
      //   await axios.update('http://localhost:9090/heros',fname)
      //   this.state.myvalue=''
      //   let res= await axios.get('http://localhost:9090/heros')
         
      //   this.setState({heroes_list:res.data})
      // }
       additemtodatabase=async()=>{
        let fname={}
        let id=document.getElementById("heroid").value
        console.log(id)
        let  name=document.getElementById("name").value
        console.log(name)
        if(id=="")
        {
          alert('enter id')
          return 
        }
        else if(name==""|| name==" ")
        {
          alert('enter name')
          return 
        }




        
        fname['id']=this.state.myvalue
        // alert('fill the id')
        
        fname['fname']=this.state.myvalue1
        
          await axios.post('http://localhost:9090/heros',fname)
          
          this.state.myvalue=''
          this.state.myvalue1=''
         
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
    





      deleteid=async(id)=>{
      console.log(id)
      await axios.delete(`http://localhost:9090/heros/${id}`)
      let res= await axios.get('http://localhost:9090/heros')
         console.log("clicked")
         console.log(res.data)
        this.setState({heroes_list:res.data})
      }
      render() {
        return (
          <div>
             <h1 className="header">Tour of heros</h1>
             <div>
             <input className="submitbutton" type="submit" value="Submit" onClick={this.additemtodatabase}/>
             

             <input id="heroid" className="textbox1"
          placeholder="HeroId"
        type="text"
        value={this.state.myvalue}
        onChange={this.handleChange}  required 
      />

             <input className="textbox" id="name"
          placeholder="HeroName"
        type="text"
        value={this.state.myvalue1}
        onChange={this.handleChange1} required
      />
      </div>
      <div>
             <Link to="/" ><button type="button" className="dashanchor">Dashboard</button></Link>
             <button class="btn btn-secondary"className="herobutton" onClick={this.showheroeslist}>Heros</button>
             </div>
             
             
             <h3>{this.state.hero_heading}</h3>
            <ul className='rowC'>
            
              {/* {Object.entries(this.state.heroes_list).map(([k,v])=>(<div className="deleteheros"><button className="idbutton">{v['id']}</button><button>{v['fname']}</button><button onClick={()=>this.deleteid(v['id'])} className="del">Delete
    </button></div>))} */}
     <Router>
    
    {Object.entries(this.state.heroes_list).map(([k,v])=>(<div className="deleteheros"><button className="idbutton">{v['id']}</button><Link to={"/user/"+v['id']+"/"+v['fname']}style={{ textDecoration: 'none' }}><button className="magnetalinks"  data-toggle="modal" data-target="#myModal1">{v['fname']}</button></Link><button onClick={()=>this.deleteid(v['id'])} className="del">Delete
    </button><div><Link to={{pathname:"Modaltest",data:v['id']}} style={{ textDecoration: 'none' }}><button className="updatebutton-list"  data-toggle="modal" data-target="#exampleModalLong" >update</button></Link> </div>
     </div>))}
    <div>
   <Route path="/user/:id/:name" ><User /></Route> </div>
    <Modaltest/>

    </Router>
    </ul>
             
    
        
        
         
         
         </div>
        );
      }
        
  }
  export default withRouter(routerhead);