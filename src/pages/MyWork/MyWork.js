import React from 'react';
import HangryProject from '../../components/HangryProject/HangryProject';
import JammingProject from '../../components/JammingProject/JammingProject';
import MySkills from '../../components/MySkills/MySkills';
import './MyWork.css';
import Fade from 'react-reveal/Fade';


function MyWork() {
    return (
        <div className="myWork">
            <div className="header">
                <MySkills className="mySkills" />
            </div>
            <div className="myWork-page">
                <div className="project">
                    <hr className="break" />
                    <Fade bottom>
                        <HangryProject />
                    </Fade>
                    <hr className="break" />
                    <Fade bottom>
                        <JammingProject />
                    </Fade>
                    <hr className="break" />
                </div>
            </div>
        </div>
    )
}

export default MyWork
