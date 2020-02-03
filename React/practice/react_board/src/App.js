import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Profiles from './pages/Profiles';
import HistorySample from './sample/HistorySample';
import Board_detail from './pages/Board_detail';
import Board from './pages/Board';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/seowon">서원 프로필</Link>
        </li>
        <li>
          <Link to="/profile/seongho">성호 프로필</Link>
        </li>
        <li>
          <Link to="/profiles">전체 프로필</Link>
        </li>
        <li>
          <Link to="/history">History test</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route path="/board" component={Board} exact />
        <Route path= "/board/:bno" component={Board_detail} />

        {/* Path를 따로 정의하지 않으면 모든 상황에 렌더링됨 */}
        <Route
          render={({ location }) => (
            <>
              <h2>이 페이지는 존재하지 않습니다 : </h2>
              <p>{location.pathname}</p>
            </>
          )}
        />
      </Switch>
    </>
  );
};

export default App;