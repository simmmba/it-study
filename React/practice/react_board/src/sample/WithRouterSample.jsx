import React from 'react';
import {withRouter} from 'react-router-dom';

const WithRouterSample = ({location, match, history}) => {
    return (
        <>
            <h4>location</h4>
            <textarea
                value={JSON.stringify(location, null, 2)} // null, 2 -> JSON에 들여쓰기가 적용된 상태로 문자열 만들어짐
                rows={7} readOnly={true} />

            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={7} readOnly={true} />
            
            <br />
            <button onClick = {() => history.push('/')}>홈으로</button>
        </>
    );
};

export default withRouter(WithRouterSample);