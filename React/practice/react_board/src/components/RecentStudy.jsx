import React from 'react';

const RecentStudy = props => {
    return (
        <>
            <div class="in-this-week">
                <div class="title">
                    최근 생성된 스터디
                </div>
                <div>
                    {props.recent.length > 0 ? (
                        props.recent.map(r => (
                            <div>
                                <div>{r.fno}</div>
                                <div>{r.fname}</div>
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

export default RecentStudy;