import React, { useState } from 'react';
import Slider from 'infinite-react-carousel';
import MyStudy from '../components/MyStudy';
import RecentStudy from '../components/RecentStudy';
import FamousStudy from '../components/FamousStudy';
import styles from '../css/CSSModule.module.css';

const Home = () => {

    return (
        <>
            <Slider dots autoplay autoplaySpeed={3000}>
                <div>
                    <center><img src="images/600_120_1.jpg" alt="image1" style={{ width: '100%' }}></img></center>
                </div>
                <div>
                    <center><img src="images/600_120_2.jpg" alt="image2" style={{ width: '100%' }}></img></center>
                </div>
                <div>
                    <center><img src="images/600_120_3.jpg" alt="image3" style={{ width: '100%' }}></img></center>
                </div>
            </Slider>

            <br /><br />

            <div className="studyList">
                <MyStudy />
                <RecentStudy />
                <FamousStudy />
            </div>
        </>
    );
};

export default Home;