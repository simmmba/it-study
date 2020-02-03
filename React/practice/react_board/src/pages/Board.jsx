import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import { data } from './Board_detail';
// import WithRouterSample from '../sample/WithRouterSample';

const Board = () => {
    const activeStyle = {
        background : 'black',
        color : 'white'
    };

    return (
        <>
            <h3>게시글 목록:</h3>
            {/* <ul>
                {data.map(b => (
                    <li><NavLink to = {`board/${b.bno}`}>{b.bwriter}</NavLink></li>
                ))}
            </ul> */}
            <table border="1">
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
                {data.map(b => (
                    <tr align="center">
                        <td width = "50">{b.bno}</td>
                        <td width = "300"><NavLink to = {`board/${b.bno}`}>{b.btitle}</NavLink></td>
                        <td width = "100">{b.bwriter}</td>
                        <td width = "100">{b.bdate}</td>
                    </tr>
                ))}
            </table>
        </>
    );
};

export default Board;