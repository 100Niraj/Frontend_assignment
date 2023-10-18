import React, { useState } from 'react'
import './Board.css'
import { MoreHorizontal ,Plus } from "react-feather";

import Card from "../Card/Card";

function Board({title ,icon, cardData = []}) {
    const [open, setOpen] = useState(false);
    return (
        <div className='board_outer'>
            <div className="board_top" onClick={()=> setOpen(!open)}>
                <p className="board_top_title">
                {icon && <span>{icon}</span>}
                    {title}
                    &nbsp;&nbsp;
                    <span></span>
                </p>
                <Plus/>
                <MoreHorizontal />
            </div>
            <div className={open ? "board_cards" : "board_cards board_open"}>
                {cardData.map((data, index)=>(
                    <Card id={data?.id} title={data?.title} key={index} tags={data?.tag}/>
                ))}
            </div>

        </div>
    )
}

export default Board