import React, { Component } from 'react'
import {Form,Table} from 'react-bootstrap';

export default class Countries extends Component {
    state={
        inp:''
    }
    onchange=(e)=>{this.setState({inp:e.target.value})}
    

    render() {
        const {countries}=this.props;

       
        console.log(countries);
        return (
            <>
            <Form.Control type="text" style={{background:'#D5D5D2'}} placeholder="Search By Country Name........" onChange={this.onchange} />
            <br/><br/>
            <Table striped bordered hover variant="dark"  responsive >

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
}).map((country)=>{
  return <tr>
                <td>{country.Country}</td>
                <td>{country.NewConfirmed}</td>
                <td>{country.TotalConfirmed}</td>
                <td>{country.TotalRecovered}</td>
                <td>{country.TotalDeaths}</td>
            </tr>

})}
            
            </tbody>
            </Table>

            </>
                
          
        )
    }
}
