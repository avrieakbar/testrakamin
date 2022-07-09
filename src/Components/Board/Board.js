import React from 'react';
import { PlusCircle } from 'react-feather';
import Card from '../Card/Card';
import "./Board.css";

function Board() {
    return (
        <div className="board">
            <div className='board_top'>
                <p className='board_top_title'>Group Task 1</p>
                <p className='board_top_month'>January-March</p>
            </div>
            <div className='board_cards'>
                <Card />
            </div>
            <div className='board_input'>
                <i className='board_input_icon'><PlusCircle /></i>
                <a className='board_input_text'>New Task</a>
            </div>
        </div>
    );
}

export default Board