import React from 'react'
import { MoreHorizontal } from 'react-feather';
import './Card.css'

function Card() {
    return (
        <div className='card'>
             <div className='card_task'>
             <p className='card_task_text'>Ini Task</p>
              </div>
            <div className='card_down'>
            <div className='card_progress'>
                 <a className='card_progress_text'>Ini Progress Bar</a>
                </div>
                <i className='card_dropdown'><MoreHorizontal /></i>
            </div>
        </div>
    );
}

export default Card