import React,{useState} from 'react';
import arrow from './arrow.svg';
import './SearchBar.css';

function SearchBar({updatedData}) {

    const[ipnumber,setIpnumber]=useState('')
    function handleChange(event){
      setIpnumber(event.target.value)
     }
    function handleClick(){
        fetch(`https://ipapi.co/${ipnumber}/json/`)
        .then(resp=>resp.json())
        .then(resp=>updatedData(resp))
        .catch((error)=>console.log(error))
        
    }
    
    return(
        <div id="ip-tracker">
          <p id="tracker">IP Address Tracker</p>
          <div id="search">
            <input type="text" placeholder="Search for any IP Address or domain..." 
             onChange={handleChange} id="searchbar" >
            </input>
            <span id="arrow-span" onClick={handleClick}>
            <img src={arrow} alt="arrow" id="arrow"/>
            </span>
          </div> 
        </div>
    )

}

export default SearchBar


 