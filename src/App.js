import './App.css';
import { useEffect, useState } from 'react';
import Home from "./Components/Home"
import NavBar from "./Components/NavBar/NavBar.jsx"
import { PRIORITY_BOARDS, STATUS_BOARDS } from './Utils/constant';
import orderByTitle from './Utils/orderByTitle';
import orderByPriority from './Utils/orderByPriority';

function App() {

  const [selectedGroup, setSelectedGroup] = useState("status");
  const [selectedOrdering, setSelectedOrdering] = useState("title");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [boardTitleList, setBoardTitleList] = useState([]);

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

  // To filter the data based on selected group and selected ordering   
  useEffect(() => {
    if (data.tickets && data.tickets.length !== 0) {
      if (selectedGroup === "status") filterDataByStatus();
      else if (selectedGroup === "user") filteredDataByuser();
      else filteredDataByPriority();
    }
  }, [selectedGroup, selectedOrdering, data]);

  function filterDataByStatus() {
    const dataToSet = {};
    // {"Todo" : [{...},{...}] }

    for (var i = 0; i < data.tickets.length; i++) {
      const status = data.tickets[i].status;
      if (!dataToSet[status]) {
        dataToSet[status] = [];
      }
      dataToSet[status].push(data.tickets[i]);
    }

    if (selectedOrdering === "title") orderByTitle(dataToSet);
    else orderByPriority(dataToSet);

    console.log(dataToSet)
    setFilteredData(dataToSet);
    setBoardTitleList(STATUS_BOARDS);
  }

  function filteredDataByuser() {
    const users = data.users;
    const dataToSet = {};

    for (var i = 0; i < data.tickets.length; i++) {
      const userId = data.tickets[i].userId;
      const user = users.filter(user => user.id === userId)[0];
      if (!dataToSet[user.name]) {
        dataToSet[user.name] = [];
      }
      dataToSet[user.name].push(data.tickets[i]);
    }

    if (selectedOrdering === "title") orderByTitle(dataToSet);
    else orderByPriority(dataToSet);

    console.log(dataToSet)
    setFilteredData(dataToSet);

    users.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    setBoardTitleList(users.map(user => user.name));

  }

  function filteredDataByPriority() {
    const dataToSet = {};
    // {"Todo" : [{...},{...}] }

    for (var i = 0; i < data.tickets.length; i++) {
      const priority = 4 - data.tickets[i].priority; // priority in data is a number 0 - no priority and 4 means Urgent
      // But priority variable is just reverse.
      if (!dataToSet[PRIORITY_BOARDS[priority]]) {
        dataToSet[PRIORITY_BOARDS[priority]] = [];
      }
      dataToSet[PRIORITY_BOARDS[priority]].push(data.tickets[i]);
    }

    if (selectedOrdering === "title") orderByTitle(dataToSet);
    else orderByPriority(dataToSet);

    console.log(dataToSet)
    setFilteredData(dataToSet);
    setBoardTitleList(PRIORITY_BOARDS);
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
          <Home data={filteredData} boardTitleList={boardTitleList} />
        </div>
      </div>
    </div>

  );
}

export default App;
