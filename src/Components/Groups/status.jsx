
import react, { useEffect, useState } from 'react';

import Board from './Board/Board';

import { CheckCircle, RefreshCw, Circle  } from "react-feather"; 

function Home ({selectedGroup, selectedOrdering}){

    return (
        <>
        <Board title='Task' icon={<i class="fa fa-solid fa-pencil"></i>}/>
        <Board title='ToDo' icon={<Circle />} />
        <Board title='In Progress'icon={<RefreshCw />} />
        <Board title='Done' icon={<CheckCircle />} />
        <Board title='Canceled'icon={<i class="fa fa-solid fa-ban"></i>}/>
        </>
    )
}

export default Home;