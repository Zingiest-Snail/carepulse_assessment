import React, {Component} from 'react';

class Nav extends Component {
  //Function validates whether previous page exists before
  //changing page    
   changePrev = (previous,page) => {
        console.log("Previous")
        console.log(previous)
       if(previous !== null){
           this.props.changeFunction(previous)
       }else{
           console.log("Empty")
           alert("This is the first page")
       }
        
    }
   //Function validates whetehr next page exists before
   //changing page
   changeNext = (next) => {
       console.log(this.props.urlData)
       console.log("Next")
       console.log(next)
       if(next !== null){
           console.log("Next page available")
           this.props.changeFunction(next)
       }
       else{
           alert("This is the last page")
           
       }
   }
  render() {
      const { next, previous } = this.props.urlData
      return(
          <div style={navStyle}>
                <button style={btnStyle} onClick={this.changePrev.bind(this,previous)}>Prev</button> | <button style={btnStyle} onClick={this.changeNext.bind(this,next)}>Next</button>
            </div>
    );
  }
}

//Style for Buttons
const btnStyle = {
    background: '#337EC6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    padding: '5px 8px',
    fontSize: '15px'
    
}
//Style for Nav content
const navStyle = {
    marginLeft:'47.5%',
    padding: '10px'
}

export default Nav;