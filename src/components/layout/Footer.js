import React from 'react';

function Footer() {
    return(
        <footer style={footerStyle}>
          <p>This Page was developed as a Solution for a Skills assessment held by Evalucom Consulting Ltd. Designed by Application Candidate</p>
          <p>Carepulse logo owned by Carepulse&trade;</p>
        </footer>
    )
}
//Style for Footer
const footerStyle = {
    background:'#005EB8',
    color: '#ffffff',
    padding: '10px',
    fontSize: '12px'
}

export default Footer;