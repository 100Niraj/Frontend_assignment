import react, { useEffect, useState } from 'react';

import Board from './Board/Board';

import { CheckCircle, RefreshCw, Circle  } from "react-feather"; 
import { STATUS_BOARDS } from '../Utils/constant';

function Home ({data = {}}){
    const iconMap = {
      "Backlog" : <i class="fa fa-solid fa-pencil"></i>,
      "Todo" : <Circle />, 
      "In progress" : <RefreshCw />, 
      "Done" : <CheckCircle />,
      "Cancelled" : <i class="fa fa-solid fa-ban"></i>
    }
    return (
        <>
        {STATUS_BOARDS.map((status, index)=>(
          <Board title={status} icon={iconMap[status]} cardData={data[status]}/>
        ))}
        </>
    )
}

export default Home;