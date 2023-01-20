import React,{useState,useEffect} from 'react';
import './IpDetails.css';


function IpDetails({data}){
    const[userip,setUserip]=useState([])
      useEffect(()=>{
        fetch("https://ipapi.co/json/")
        .then(resp=>resp.json())
        .then(resp=>{
            setUserip(resp);
            console.log(resp)
        })
        .catch((error)=>console.log(error))
         },[])
    
    const[ipaddress,setIpaddress]=useState()
    const[location,setLocation]=useState([])
    const[timezone,setTimezone]=useState()
    const[isp,setIsp]=useState()
    useEffect(()=>{
        if(Object.keys(data).length === 0)return
        setIpaddress(data.ip)
        setLocation([data.region,data.city])
        setTimezone(data.utc_offset)
        setIsp(data.org)
        
    },[data])
    return(
        <main>
            <div id="secondary-div">
                <p>IP ADDRESS</p>
                <h3>{ipaddress||userip.ip}</h3>
            </div>
            <hr/>
            <div id="secondary-div">
                <p>LOCATION</p>
                <h3>{`${location}`||`${userip.region}`}</h3>
            </div>
            <hr/>
            <div id="secondary-div">   
                <p>TIMEZONE</p>
                <h3>UTC {timezone||userip.utc_offset}</h3>
            </div>
            <hr/>
            <div id="secondary-div">
                <p>ISP</p>
                <h3>{isp||userip.org}</h3>
            </div>
        </main>
    )
}
export default IpDetails