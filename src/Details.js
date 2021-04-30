import React, { Component } from 'react'
import axios from 'axios';
import Summary from './Summary'
import Countries from './Countries'
import logo from './covid.png';
import {Container,Row,Col} from 'react-bootstrap';

export default class Details extends Component {
    state={
        countries:[],
        global:[],
        currentDate:null,
        loading:true,
        searchTerm:""
      
    }
  
   async componentDidMount()
   {
       const res=await axios.get("https://api.covid19api.com/summary");
       console.log(res);
       this.setState({countries:res.data.Countries});
       this.setState({global:res.data.Global});
       this.setState({currentDate:res.data.Date});
       this.setState({loading:false});
   }
   onInputchange=(event)=>{
    console.log(event.target.value);
    this.setState({searchTerm:event.target.value})
 }

  

    render() {
        if(this.state.loading)
        {
            return <div class="spinner-grow" style={{width: "8rem",height: "8rem"}} role="status">
            
          </div>
        }
      
       
        return (
            
            <Container>
<Row >

<h1 style={{fontSize:'65px',fontFamily:'  Comic Sans, cursive',color:'white',marginRight:'0px'}}>C<span><img className="img" src={logo} alt="covid-img"/></span>VID-19 TRACKER</h1>              
            </Row>
            
            
            <Row  >
        

            <Col xs lg={3} >
            <br/> <br/>
             
            <Summary summary={this.state.global} currentDate={this.state.currentDate}/>
             </Col>

              <Col md="auto">
              <Countries countries={this.state.countries}/>
              </Col>
           
            </Row>
          
            </Container>
        )
    }
}

