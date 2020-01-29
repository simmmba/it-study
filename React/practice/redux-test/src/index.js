import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'; // 스토어 만들기
import {Provider} from 'react-redux'; // 프로젝트에 리덕스 적용하기 위한 Provider
import {composeWithDevTools} from 'redux-devtools-extension'; // redux-devtools 사용
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules'; // 파일명이 index.jsx라서 디렉토리명만 입력해도 됨

const store = createStore(rootReducer, composeWithDevTools()); // 스토어 만들기 + redux-devtools 사용

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, // Provider로 감싸기
    
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
