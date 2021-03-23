import React, { Component } from 'react'

import {Card,CardDeck} from 'react-bootstrap';
 export default class Summary extends Component {
   
    render() {
        const {summary,currentDate}=this.props;

        return (
          <>
      

      <h1>GLOBAL DATA</h1>
      <h2 style={{color:'orangered'}}>Last Updated on {new Date (currentDate).toDateString()} </h2>
    
                <div className="row mt-xl-4" style={{margin:'0 auto'}}>
                <CardDeck>
                <Card style={{ width: '18rem',borderBottom:'6px solid maroon',background:'#E5F5FB'}}>
  <Card.Body>
    <Card.Title><h2>New Confirmed</h2></Card.Title>
   
    <Card.Text>
    <h1>{summary.NewConfirmed}</h1>
                   
    </Card.Text>
  
  </Card.Body>
</Card>


            <Card style={{ width: '18rem',borderBottom:'6px solid orangered',background:'#E5F5FB'}}>
  <Card.Body>
    <Card.Title><h2>Total Confirmed</h2></Card.Title>
   
    <Card.Text>
    <h1>{summary.TotalConfirmed}</h1>
                    
    </Card.Text>
  
  </Card.Body>
</Card>

<Card style={{ width: '18rem',borderBottom:'6px solid blue',background:'#E5F5FB'}}>
  <Card.Body>
    <Card.Title><h2>New Deaths</h2></Card.Title>
   
    <Card.Text>
    <h1>{summary.NewDeaths}</h1>
                  
    </Card.Text>
  
  </Card.Body>
</Card>

<Card style={{ width: '18rem',borderBottom:'6px solid crimson',background:'#E5F5FB'}}>
  <Card.Body>
    <Card.Title><h2>Total Deaths</h2></Card.Title>
   
    <Card.Text>
    <h1>{summary.TotalDeaths}</h1>
                   
    </Card.Text>
  
  </Card.Body>
</Card>

<Card style={{ width: '18rem',borderBottom:'6px solid fuchsia',background:'#E5F5FB'}}>
  <Card.Body>
    <Card.Title><h2>Total Recovered</h2></Card.Title>
   
    <Card.Text>
    <h1>{summary.TotalRecovered}</h1>
    
    </Card.Text>
  
  </Card.Body>
</Card>


     
</CardDeck>
              
    
             
    
                

                </div>
                    
                    
               </>
                
                )

        
           
            
        
    }
}


