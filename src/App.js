import { useEffect, useState } from 'react';
import './App.css';
import Board from "./Components/Board/Board"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar/NavBar.jsx"
import { STATUS_BOARDS } from './Utils/constant';
import orderByTitle from './Utils/orderByTitle';

function App() {

  const [selectedGroup, setSelectedGroup] = useState("status");
  const [selectedOrdering, setSelectedOrdering] = useState("title");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(()=>{
    if(data.tickets && data.tickets.length!==0){
      if(selectedGroup==="status") filterDataByStatus();
      else if(selectedGroup==="user") filteredDataByuser();
      else filteredDataByPriority();
    }
  },[selectedGroup, selectedOrdering, data]);

  function filterDataByStatus(){
    const dataToSet = {};
    // {"Todo" : [{...},{...}] }

    for(var i=0;i<data.tickets.length; i++){
      const status = data.tickets[i].status;
      if(!dataToSet[status]){
        dataToSet[status] = [];
      }
      dataToSet[status].push(data.tickets[i]);
    }
    
    if(selectedOrdering==="title") orderByTitle(dataToSet);
    // else orderByPriorityAndSet(dataToSet);

    console.log(dataToSet)
    setFilteredData(dataToSet);
  }

  function filteredDataByuser(){

  }

  function filteredDataByPriority(){

  }


  return (
    <div className="app">
      <div className="app_navbar">
        <NavBar
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
          selectedOrdering={selectedOrdering}
          setSelectedOrdering={setSelectedOrdering}
        />
      </div>
      <div className="app_outer">
        <div className="app_boards">
          <Home data={filteredData} />
        </div>
      </div>
    </div>

  );
}

export default App;
