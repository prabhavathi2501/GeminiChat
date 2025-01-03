import React, { useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css"
import { useState } from "react";
import { dataContext } from '../context/UserContext';

function Sidebar() {
  const [extend, setExtend] = useState(false);
  const { sent, prevPrompt,newChat } = useContext(dataContext)

  return <>
    <div className='sidebar'>
      <GiHamburgerMenu id="ham" onClick={() => {
        setExtend(prev => !prev)
        console.log(extend);
      }} />
      <div className='newchat' onClick={()=>{
        newChat()
      }}>
        <FaPlus />
        {extend ? <p>NewChat</p> : null}

      </div>

      {/* {prevPrompt.map((item, index) => {
        return (
          <div className='recent'>
            <FaRegMessage />
            {extend ? <p>{item}</p> : null}
          </div>
        )
      })} */}

      <div className='recent'>
        <FaRegMessage />
        {extend ? <p>hello</p> : null}

      </div>
    </div>
  </>
}

export default Sidebar