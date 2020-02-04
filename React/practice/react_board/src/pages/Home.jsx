import React, { useState } from 'react';
import Slider from 'infinite-react-carousel';
import FamousStudy from '../components/FamousStudy';
import RecentStudy from '../components/RecentStudy';
// import styles from '../css/HomeStudyList.css';

const Home = () => {

    const famousList = [
        {
            fno: 1,
            fname: '삼성 면접 스터디'
        },
        {
            fno: 2,
            fname: '인적성 스터디'
        }
    ];

    const recentList = [
        {
            rno: 1,
            rname: '삼성 면접 스터디'
        },
        {
            fno: 2,
            rname: '인적성 스터디'
        }
    ];

    const [famous, setFamous] = useState(famousList);
    const [recent, setRecent] = useState(recentList);

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

            <div style={styles.container}>
                <div className={styles.item1}>
                    <FamousStudy famous={famous} />
                </div>

                <div className={styles.item2}>
                    <RecentStudy recent={recent} />
                </div>
            </div>
        </>
    );
};

export default Home;