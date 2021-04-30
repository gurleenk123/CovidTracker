import React, { Component } from 'react'
import { Alert } from 'react-bootstrap';

 export default class Summary extends Component {
   
    render() {
        const {summary,currentDate}=this.props;

        return (
          <>
      

      <div>
                    <Alert className="align" style={{color:'red',fontSize:'30px'}}>
                      
                    Last Updated : <br/>{new Date(summary.Date).toDateString()}
                    </Alert>
                </div>
        
              
    
        
                <div>
                    <Alert variant="info" className="align">
                        <h3> New Confirmed:</h3>
                        <h3>{summary.NewConfirmed}</h3>
                    </Alert>
                </div>
           
                <div>
                    <Alert variant="secondary" className="align">
                        <h3> Total Confirmed:</h3>
                        <h3>{summary.TotalConfirmed}</h3>
                    </Alert>
                </div>
         <div>
                    <Alert variant="success" className="align">
                        <h3> Total Recovered:</h3>
                        <h3>{summary.TotalRecovered}</h3>
                    </Alert>
                </div>
               
            
                <div>
                    <Alert variant="danger" className="align">
                        <h3> Total Deaths:</h3>
                        <h3>{summary.TotalDeaths}</h3>
                    </Alert>
                </div>
           
              
      
                    
                    
               </>
                
                )

        
           
            
        
    }
}


