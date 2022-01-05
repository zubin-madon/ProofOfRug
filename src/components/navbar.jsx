import React, {useState} from 'react'
import Logo from '../assets/proofOrRugText.png'
import {Link} from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import TwitterIcon from '@material-ui/icons/Twitter';


function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
    return (
        <div className="navbar">
            <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img id="showAtHighRes" src={Logo} alt="Proof Of Rug Logo"/>
            <div className="hiddenLinks" id="hideAtHighRes">
            <Link to="/">Home</Link>
                <Link to="/ETH">ETH Projects</Link>
                <Link to="/SOL">SOL Projects</Link>
                <div className="socialMedia">
                <a target="_blank" href="https://twitter.com/proofofrug" rel="noopener noreferrer">
                <TwitterIcon />
                </a>
                </div>
            
            </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/ETH">ETH Projects</Link>
                <Link to="/SOL">SOL Projects</Link>      
                <button onClick={toggleNavbar}>
                <ReorderIcon />
                </button>
                <div className="socialMedia">
                <a target="_blank" href="https://twitter.com/proofofrug" rel="noopener noreferrer">
                <TwitterIcon />
                </a>
                </div>  
            </div>
            
               
        </div>
    )
}

export default Navbar;
