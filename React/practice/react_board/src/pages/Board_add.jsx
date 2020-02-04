import React, {useState} from 'react';
// import { NavLink, Route, Link } from 'react-router-dom';

const Board_add = props => {

    const initialFormState = {
        bno : null,
        bdate : '',
        bwriter : '',
        btitle : '',
        bcontents : ''
    };

    const [board, setBoard] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setBoard({...board, [name] : value});
    }

    return (
        <form onSubmit = {event => {
            event.preventDefault();
            if(!board.bdate || !board.bwriter || !board.btitle || !board.bcontents) return;

            props.Board_add(board);
            setBoard(initialFormState);
        }}>

            <label>작성일</label>
            <input type = "text" name = "bdate" value = {board.bdate} onChange = {handleInputChange} />
            <br />
            <label>작성자</label>
            <input type = "text" name = "bwriter" value = {board.bwriter} onChange = {handleInputChange} />
            <br />
            <label>제목</label>
            <input type = "text" name = "btitle" value = {board.btitle} onChange = {handleInputChange} />
            <br />
            <label>내용</label>
            <input type = "text" name = "bcontents" value = {board.bcontents} onChange = {handleInputChange} />
            <br />
            <button>작성하기</button>
        </form>
    );
};

export default Board_add;