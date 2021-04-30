import React, { Component } from 'react'
import {Form,Table} from 'react-bootstrap';

export default class Countries extends Component {
    state={
        inp:''
    }
    onchange=(e)=>{this.setState({inp:e.target.value})}
    

    render() {
        const {countries}=this.props;

       
      
        return (
            <>
            <br/><br/>
            <h1 style={{color:'grey'}}>LATEST STATISTICS OF COVID-19 PANDEMIC</h1>
        
            <Form.Control type="text" style={{background:'#D5D5D2'}} placeholder="Search By Country Name........" onChange={this.onchange} />
            <br/>
            <Table striped bordered hover variant="light"  responsive >

<thead>
    <tr>
        <th>Country</th>
        <th>New Confirmed</th>
        <th>Total Confirmed</th>
        <th>Total Recovered</th>
        <th>Total Deaths</th>
    </tr>
</thead>
<tbody>
{countries.filter((country)=>{
    if(this.state.inp==='')
    {
        return country
    }
    else if(country.Country.toLowerCase().includes(this.state.inp.toLowerCase()))
    {
        return country
    }
    return null;
}).map((country)=>{
  return <tr>
                <td>{country.Country}</td>
                <td>{country.NewConfirmed}</td>
                <td>{country.TotalConfirmed}</td>
                <td>{country.TotalRecovered}</td>
                <td style ={{backgroundColor : "#f8d7da"}}>{country.TotalDeaths}</td>
            </tr>

})}
            
            </tbody>
            </Table>

            </>
                
          
        )
    }
}
