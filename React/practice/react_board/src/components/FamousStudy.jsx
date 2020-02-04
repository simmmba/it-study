import React from 'react';

const FamousStudy = props => {
    return (
        <>
            <div class="in-this-week">
                <div class="title">
                    인기 있는 스터디
                </div>
                <div>
                    {props.famous.length > 0 ? (
                        props.famous.map(f => (
                            <div>
                                <div>{f.fno}</div>
                                <div>{f.fname}</div>
                            </div>
                        ))
                    ) : (
                        <div>
                            스터디 없음
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default FamousStudy;