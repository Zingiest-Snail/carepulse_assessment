import React from 'react';
import logo from './static/NHS-logo.png';
import logo2 from './static/Carepulse.jpg';

function Header() {
    return(
        <div>
            <div style={LogoArea}>
                <img src={logo} style={logoStyle} alt='NHS'/>
                <img src={logo2} style={CarepulseStyle} alt='Carepulse' />
            </div>
            <div>
                <header style={headerStyle}>
                    <h2>Welcome to the Skills Assessment Solution </h2>
                </header>
            </div>
        </div>
    )
}
//ain Header Style
const headerStyle = {
    background:'#005EB8',
    color: '#ffffff',
    padding: '10px',
    fontSize:'14px'
}


//NHS Logo Style
const logoStyle = {
    height:'60px',
    float: 'right',
    marginRight: '3%',
    marginTop: '0.5%'
}
//Style for area Logos are present in
const LogoArea = {
    height: '70px',
    background: '#ffffff'
}
//Style for carepulse logo
const CarepulseStyle = {
    height: '50px',
    marginLeft: '3%',
    marginTop: '0.5%'
}



export default Header;