import React, { useContext } from 'react'
import Sidebar from "../src/components/sidebar/Sidebar"
import ChatSection from './components/ChatSection/ChatSection'
import Seperation from './components/seperation/Seperation'
import { dataContext } from './components/context/UserContext'

function App() {
  // let data = useContext(dataContext)
  // console.log(data)
  return<>

 <Sidebar/>
 <Seperation/>
 <ChatSection/>
  </>
}

export default App