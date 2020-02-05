import React, { useState } from 'react';
import styles from '../css/CSSModule.module.css';
import StudyList from './StudyList';

const RecentStudy = () => {
    
    const recentList = [
        {
            lno: 1,
            ltype: '자소서',
            lname: 'SK그룹 자소서 미리 작성'
        },
        {
            lno: 2,
            ltype: '자소서',
            lname: '삼성전자 자소서 뽀개기'
        },
        {
            lno: 3,
            ltype: '자소서',
            lname: '블라인드 자소서 스킬'
        },
        {
            lno: 4,
            ltype: '자소서',
            lname: '한번에 붙는 자소서 쓰기'
        },
        {
            lno: 5,
            ltype: '자소서',
            lname: '떨어진 자소서 다시보기'
        }
    ];
    
    const [list, setList] = useState(recentList);

    return (
        <div className="listBox">
            <div className="listTitle">
                최근 개설된 스터디
            </div>
            <StudyList list={list}/>
        </div>
    );
}

export default RecentStudy;