import React from 'react';
import "./Card.css";


function Card({id, title, tags = []}) {
    return (
        <div className='card'>
            <div className='card_top'>
                <div className='card_labels'>
                    <span>{id}</span>
                    <span><i class="fa fa-user"/></span>
                </div>
            </div>
            <div className='card_title'>{title}</div>
            <div className='card_footer'>
            <i class="fa fa-solid fa-question"></i>
            {tags.map((tag,index)=>(
                <p key={index}><i class="fa fa-solid fa-circle"></i>{tag}</p>
            ))}
            </div>
        </div>
    )
}

export default Card