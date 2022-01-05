import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <p>&copy; {new Date().getFullYear()} ProofOfRug.in</p>
        </div>
    )
}

export default Footer;
