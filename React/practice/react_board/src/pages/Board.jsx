import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import WithRouterSample from '../sample/WithRouterSample';

export const boardData = [
    {
        bno: 1,
        bwriter: '조서원',
        btitle: '게시판1',
        bcontents: '게시판1 내용',
        bdate: '2020-01-31'
    },
    {
        bno: 2,
        bwriter: '배성호',
        btitle: '게시판2',
        bcontents: '게시판2 내용',
        bdate: '2020-02-01'
    }
];

const Board = () => {

    const [board, setBoard] = useState(boardData);

    const addBoard = newBoard => {
        newBoard.bno = boardData[boardData.length - 1].bno + 1;
        setBoard(board => [...board, newBoard]);
    }

    const deleteBoard = bno => {
        console.log(bno)
        setBoard(board=> board.filter(b => b.bno !== bno));
    }

    // const activeStyle = {
    //     background: 'black',
    //     color: 'white'
    // };

    return (
        <>
            <h2>게시글 목록</h2>
            <Link to="/newBoard">
                <button type="button" onClick = {addBoard}>
                    새 글 쓰기
                </button>
            </Link>
            <br />
            <br />
            {/* <ul>
                {data.map(b => (
                    <li><NavLink to = {`board/${b.bno}`}>{b.bwriter}</NavLink></li>
                ))}
            </ul> */}
            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {board.map(b => (
                        <tr align="center" key={b.bno}>
                            <td width="50">{b.bno}</td>
                            <td width="300"><NavLink to={`board/${b.bno}`} board={board} >{b.btitle}</NavLink></td>
                            <td width="100">{b.bwriter}</td>
                            <td width="100">{b.bdate}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick = {() => deleteBoard(b.bno)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Board;