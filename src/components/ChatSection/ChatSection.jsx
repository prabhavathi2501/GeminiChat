import React from 'react'
import "./ChatSection.css"
import Darkmode from '../Darkmode/Darkmode'
import { LuSendHorizontal } from "react-icons/lu";
import { useContext } from 'react';
import { dataContext } from '../context/UserContext';
import user from "../../assets/user.png";
import ai from "../../assets/ai.png";

function ChatSection() {
    let{sent,input,setInput,showResult,resultData, recentPrompt,loading}=useContext(dataContext)
    return <>

        <div className='chatsection'>
            <div className='topsection'>
                {!showResult? <div className='heading'>
            <span>HELLO FRIEND</span>
            <span>I'M Your Own Assistance</span>
            <span>what can i help you</span>
            </div>:<div className='result'>
                <div className='userbox'>
                    <img src={user} alt='' width={"40px"}/>
                    <p>{ recentPrompt}</p>

                </div>
                <div className='aibox'>
                <img src={ai} alt='' width={"40px"}/>
                {loading?<div className='loading'>
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
                :
                <p>{resultData}</p>
                      }        
                </div>
                </div>}
               
            </div>
            <div className='bottomsection'>
             <input 
             onChange={(e)=>setInput(e.target.value)}
             type="text" placeholder='Enter your Prompt' value={input}/>
             <button id="sendbtn" onClick={()=>{
                sent(input);
             }}><LuSendHorizontal /></button>
             <Darkmode/>
            </div >
        </div>
    </>
}

export default ChatSection