import Board from './Board/Board';
import { CheckCircle, RefreshCw, Circle } from "react-feather";
import "./Home.css";

function Home({ data = {}, boardTitleList = [] }) {
  const iconMap = {
    "Backlog": <i class="fa fa-solid fa-pencil"></i>,
    "Todo": <Circle />,
    "In progress": <RefreshCw />,
    "Done": <CheckCircle />,
    "Cancelled": <i class="fa fa-solid fa-ban"></i>,
    "No priority" : <i class="fa fa-solid fa-pencil"></i>,
    "Low" : <Circle />, 
    "Medium" : <RefreshCw />, 
    "High" : <CheckCircle />,
    "Urgent" : <i class="fa fa-solid fa-ban"></i>
  }
  return (
    <div className='board_parent'>
      {boardTitleList.map((title, index) => (
        <Board title={title} icon={iconMap[title]} cardData={data[title]} />
      ))}
    </div>
  )
}

export default Home;