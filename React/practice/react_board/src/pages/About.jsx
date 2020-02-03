import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 문자열 맨 앞의 ? 생략
    });

    const showDetail = query.detail === 'true'; // 쿼리 파싱 결과값 == 문자열

    return (
        <>
            <h1>소개</h1>
            <p>라우터 기초 실습해보기</p>
            {showDetail && <p>detail 값 == true</p>}
        </>
    );
};

export default About;