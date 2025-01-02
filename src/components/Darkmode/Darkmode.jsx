import React, { useEffect, useState } from 'react'
import "./Darkmode.css"
import { LuSunMoon } from "react-icons/lu";

function Darkmode() {

const[mode,setMode]=useState("darkmode")
   

function toggle(){
    if(mode==="darkmode"){
        setMode("lightmode")
    }
    else{
        setMode("darkmode");
        
    }
}
useEffect(()=>{
document.body.className=mode
},[mode])
  return <>
  <button  className="darkmodebtn" onClick={()=>{
   toggle();
   console.log(mode)
  }}><LuSunMoon /></button>
  </>
}

export default Darkmode