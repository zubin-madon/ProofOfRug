import React from 'react'
import "../styles/Home.css"

function Home() {
    return (
        <div className='home'>

    <div className='row'>
    <div className="card">
      <div className="card__content">
        <h3 className="card__header">Who are We?</h3>
        <div className="card__info">
        <li className="card__info">Proof Of Rug is an initiative to weed out rugs and con artists in the NFT space.</li>
        </div>
      </div>
    </div>
    </div>
    <div className='row'>
    <div className="card">
      <div className="card__content">
        <h3 className="card__header">What We Do:</h3>
        <div className="card__info">
        <li>Verify the dev's identity.</li>
        <li>Verify contracts where possible.</li>
        <li>Verify minting dapps to ensure they don't drain your wallet.</li>
        <br/>
        </div>
      </div>
    </div>
    </div>
    <div className='row'>
    <div className="card">
      <div className="card__content">
        <h3 className="card__header">What We Don't:</h3>
        <div className="card__info">
        <li>Cannot ensure that the roadmap is implemented.</li>
        <li>Cannot hold devs/projects legally accountable.</li>
        <li>Cannot make numba go up.</li><br />
        </div>
      </div>
    </div>
    </div>
    <div className='row'>
    <div className="card">
      <div className="card__content">
        <h3 className="card__header">Verify Your Project (Free)</h3>
        <div className="card__info">
    
        <li>Contact us on Twitter <a href='https://twitter.com/proofofrug' target="_blank"  rel="noopener noreferrer" style={{color: "white"}}>@ProofOfRug.</a></li>
        <br />
        </div>
      </div>
    </div>
    </div>

  </div>

        
    )
}

export default Home;
