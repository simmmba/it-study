import React from 'react';
import {withRouter} from 'react-router-dom';
import WithRouterSample from '../sample/WithRouterSample';

const data = {
    seowon: {
        name: '조서원',
        description: '리액트 개발자'
    },
    seongho: {
        name: '배성호',
        description: '리액트 마스터'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];

    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>

            <WithRouterSample />
        </div>
    );
};

export default withRouter(Profile);