import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {list,list2} from "./assets/Cards-array.js"
import Header from "./components/Header";
import Lnav from "./components/Second-Lnav"
import CarDs from "./components/Cards"
function App() {
  const [selectedItem,setSelectedItem]=useState(0);
  return (
    <div className="App">

       <Header/> 
      
        <Lnav 
        selectedItem={selectedItem}
         setSelectedItem={setSelectedItem}/>
         { selectedItem == 0 ? <CarDs cards={list}/> : <CarDs cards={list2}/>}  
    </div>
  );
}

export default App;
