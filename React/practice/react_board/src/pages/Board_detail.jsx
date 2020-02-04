import React from 'react';
import {Link} from 'react-router-dom';
import { boardData } from './Board';

const Board_detail = ({match}) => {
    const {bno} = match.params;
    const board_detail = boardData[bno-1];

    if(boardData[bno-1]){
        return (
            <>
                <h1>게시글 상세조회</h1>
                <table border = "1">
                    <tr>
                        <th width = "100">글번호</th>
                        <td width = "300">{board_detail.bno}</td>
                    </tr>
                    <tr>
                        <th>작성일</th>
                        <td>{board_detail.bdate}</td>
                    </tr>
                    <tr>
                        <th>글쓴이</th>
                        <td>{board_detail.bwriter}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{board_detail.btitle}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>{board_detail.bcontents}</td>
                    </tr>
                </table>
    
                <br />
                
                <Link to="/board">
                    <button type="button">
                        뒤로
                    </button>
                </Link>
                <Link to="/">
                    <button type="button">
                        홈으로
                    </button>
                </Link>
            </>
        );
    }

    return <div>존재하지 않는 게시글입니다.</div>;
};

export default Board_detail;