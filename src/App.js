import './App.css';
import { useState,useEffect,createContext,useContext } from "react";
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import  '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from "././Views/NavBar/NavBar.js";
import Tableview from './Views/Table/Tableview.js';
import AddDataForm from './Views/AddDataForm/AddDataForm'

export const globalContext = createContext();

function App() {
  const [data,setData] = useState()
  const [activeTab,setActiveTab] = useState(1)
  let contextData = {}

  const Onsubmit = () =>{
  
  }

  const Data = [ {name:'Dev chauhan',type:'abc',model:'model1',assignedto:'person1'},
                 {name:'Vinit patel',type:'def',model:'model2',assignedto:'person2'},
                 {name:'virat kohli',type:'ghi',model:'model3',assignedto:'person3'},
                 {name:'MS Dhoni',type:'jkl',model:'model4',assignedto:'person4'},
                 {name:'Rohit Sharma',type:'mno',model:'model5',assignedto:'person5'}
              ]  
  
  contextData = {Data:Data,activeTab:activeTab,setActiveTab:setActiveTab}

  return (
    <globalContext.Provider value={contextData}>
    <div className="App">
      <NavBar/>
      {activeTab == 1 ? <Tableview/>:<></>} 
      {activeTab == 2 ? <AddDataForm/>:<></>}
           {/* <button onClick={()=>Onsubmit()}>click</button>       */}
    </div>
    </globalContext.Provider>
  );
}

export default App;
