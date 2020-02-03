import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Profile from './Profile';
// import WithRouterSample from '../sample/WithRouterSample';

const Profiles = () => {
    const activeStyle = {
        background : 'black',
        color : 'white'
    };

    return (
        <>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <NavLink activeStyle = {activeStyle} to = "/profiles/seowon" active>seowon</NavLink>
                </li>
                <li>
                    <NavLink activeStyle = {activeStyle} to = "/profiles/seongho">seongho</NavLink>
                </li>
            </ul>

            <Route path = "/profiles" exact
                // rendor props: 컴포넌트 대신 보여주고싶은 jsx 넣을 수 있음
                render={() => <div>사용자를 선택해 주세요</div>} />
            <Route path = "/profiles/:username" component={Profile} />

            {/* <WithRouterSample /> */}
        </>
    );
};

export default Profiles;