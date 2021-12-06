
import React,{useState,useEffect} from 'react';
import Pattern from './components/Pattern/Pattern';
import SearchBar from './components/SearchBar/SearchBar';
import IpDetails from './components/IpDetails/IpDetails';
import Map from './components/Map/Map';
import './App.css';


function App() {
  const[data,setData]=useState([])
  const[usercoor,setUsercoor]=useState([])
  const [isloaded,setIsloaded]=useState(false)
  useEffect(()=>{
    fetch("https://ipapi.co/json/")
    .then(resp=>resp.json())
    .then(resp=>{
      setUsercoor(resp)
      setIsloaded(true) 
        })
    .catch((error)=>console.log(error))
          
  },[])
  

  return (
    <div className="app">
      <Pattern />
      <SearchBar updatedData={setData}/> 
      {isloaded?<IpDetails userinfo={usercoor} data={data}/>:null}
      {isloaded?<Map usercoordinates={usercoor} dataPoints={data} />:null }  
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <button>Tommy Tabe.</button>
      </div>
    </div>
  );
}

export default App;
