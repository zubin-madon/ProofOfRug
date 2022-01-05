import React, {useState} from 'react';
import solProjects from '../datasol';
import '../styles/Projects.css'


function SolCard() {

    const [filter, setFilter] = useState('');

    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = solProjects.filter(item =>{
        return Object.keys(item).some(key =>item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

    return (
      <div className='projects'>
      
      <div className='top-row'>
      <h4 className='search-label'>Search </h4>
      <input type="text" 
        className='from-control'
        value={filter}
        onChange={searchText.bind(this)}

      />
      </div>

      <div className='row'>
                    <h1>SOL Projects</h1>
                    </div>
        
            {dataSearch.reverse().map((project)=> {
                return (
                    <>
                    <article className='project'  key={project.id}>
                    <div className='container'>
                    <img src={project.image} alt = {project.image}/>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p><b>Mint Date:</b> {project.mintDate}</p>
                    <a href={project.projectLink} target="_blank"  rel="noopener noreferrer"><p><b>Website: </b>{project.projectLink}</p></a>
                    <a href={project.twitter} target="_blank"  rel="noopener noreferrer"><p><b>Twitter: </b>@{project.twitter.slice(20)}</p></a>
                    </div>
                    </article>
                    </>
                    
                )
            }
            )}

            </div>

      
    )
}
export default SolCard;