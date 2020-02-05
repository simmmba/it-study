import React from 'react';

const StudyList = props => {
    return (
        <div>
            {props.list.length > 0 ? (
                props.list.map(list => (
                    <div className="listContent">
                        <div className="listLank"><p>{list.lno}</p></div>
                        <div className="listContainer">
                            <p>
                                <div className="listName">{list.lname}</div>
                                <div className="listType">{list.ltype}</div>
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    스터디 없음
                </div>
            )}
        </div>
    );
};

export default StudyList;