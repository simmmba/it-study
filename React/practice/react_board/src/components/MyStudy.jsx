import React, { useState } from 'react';
import StudyList from './StudyList';

const MyStudy = () => {
    
    const myList = [
        {
            lno: 1,
            ltype: '면접',
            lname: '요기요 2차 면접 스터디'
        },
        {
            lno: 2,
            ltype: '인적성',
            lname: 'GSAT 스터디'
        },
        {
            lno: 3,
            ltype: '면접',
            lname: '삼성전자 DS 원데이'
        },
        {
            lno: 4,
            ltype: '면접',
            lname: 'SK C&C 임원 면접 대비'
        }
    ];

    const [list, setList] = useState(myList);

    return (
        <div className="listBox">
            <div className="listTitle">
                내가 진행중인 스터디
            </div>
            <StudyList list={list}/>
        </div>
    );
}

export default MyStudy;