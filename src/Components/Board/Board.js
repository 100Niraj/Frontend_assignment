import React from 'react'
import './Board.css'
import { MoreHorizontal ,Plus } from "react-feather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Card from "../Card/Card";

function Board({title ,icon, cardData = []}) {
    return (
        <div className='board_outer'>
            <div className="board_top">
                <p className="board_top_title">
                {icon && <span>{icon}</span>}
                    {title}
                    &nbsp;&nbsp;
                    <span></span>
                </p>
                <Plus/>
                <MoreHorizontal />
            </div>
            <div className="board_cards">
                {cardData.map((data, index)=>(
                    <Card id={data?.id} title={data?.title} key={index} tags={data?.tag}/>
                ))}
            </div>

        </div>
    )
}

export default Board