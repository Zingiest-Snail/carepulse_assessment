import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ResultItem extends Component {
    //Component Style
    getStyle = () => {
        return{
            backgroundColor: '#DFE2E5',
            color:'#212B32',
            padding:'10px',
            borderBottom: '5px #B3BBC1 solid',
            borderTop: '5px #B3BBC1 solid',
            borderLeft: '2px #B3BBC1 solid',
            borderRight: '2px #B3BBC1 solid',
            fontSize: '14px',
            marginLeft: '15%',
            marginRight: '15%'
        }
    }
    
    //Function for verifying if changes inputted are valid
    //Validates inputs from USer before resetting state
    submitFunction = (id, no_beds) => {
        var newR = document.getElementById(id+String(1)).value
        var newN = document.getElementById(id+String(2)).value
        var oldR = this.props.result.beds.Residential
        var oldN = this.props.result.beds.Nursing
        var total = no_beds
        
        if(newR === '' && newN === ''){
            alert("Please add values to atleast one box to make changes")
        }else if(parseInt(newR)<0 || parseInt(newN)<0 ){
            alert("Vacancies Canot be Negative")
        }
        else{
            if(newN === ''){
                newN = oldN
            } else if(newR === ''){
                newR = oldR
            }
            var vacant = parseInt(newN) + parseInt(newR)
            console.log(newR)
            console.log(newN)
            console.log(vacant)
            if(vacant <= total){
                this.props.submitFunction(id, parseInt(newR), parseInt(newN))
                document.getElementById(id+String(1)).value = ''
                document.getElementById(id+String(2)).value = ''
            }else{
                alert("Total Bed Limit Exceeded")
            }
        }
    }
    
    render(){
        const {id, no_beds, provider, local_authority, full_address, beds:{Residential, Nursing}} = this.props.result;
        return(
            <div style ={this.getStyle()}>
                <h3>{this.props.result.name}</h3>
                <h3 style ={floatRight}>Provider: {provider}</h3>
                <h3>{full_address}</h3>
                <h3>Local Authority: {local_authority}</h3><br />
                <p>Total Number of Beds: {no_beds}</p>
                <p>Total Bed Vacancies: {parseInt(Residential)+parseInt(Nursing)}</p><br/>
                <p>Residential Vacancies: {Residential}</p>
                <p style={inpStyle}>New Residential Vacancies: <input id={id+String(1)}  type="number" maxLength="3" /></p><br />
                <p>Nursing Vacancies: {Nursing}</p>
                <p style={inpStyle}>New Nursing Vacancies: <input id={id+String(2)}  type="number" maxLength="3" /></p><br />
                <button style={btnStyle} onClick={this.submitFunction.bind(this, id, no_beds)} >Submit Change</button>
            </div>
        )
    }
}

//PropTypes
ResultItem.propTypes = {
    result: PropTypes.object.isRequired
}
//Style for Provider
const floatRight = {
    float: 'right',
    marginRight: '2.5%'
}

//Style for Buttons
const btnStyle = {
    background: '#337EC6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    padding: '5px 8px',
    fontSize: '12px',
    marginLeft: '16px',
    marginBottom: '10px'
}

//Input Style
const inpStyle = {
    marginLeft: '30px'
}


export default ResultItem