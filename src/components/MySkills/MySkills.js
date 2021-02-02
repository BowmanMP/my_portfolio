import React from "react";
import './MySkills.css';
import Typist from 'react-typist';
import Blink from 'react-blink-text';


const MySkills = () => {
    return (
        <div className="mySkills">
            <p id="bioSkillsHeader">

                <Typist startDelay={2000} cursor={{
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true
                }}>
                    <span> HTML/CSS </span>
                    <Typist.Backspace count={9} delay={1500} />
                    <span> JavaScript </span>
                    <Typist.Backspace count={11} delay={1500} />
                    <span> ReactJS </span>
                    <Typist.Backspace count={9} delay={1500} />
                    <span> Node/ExpressJS </span>
                    <Typist.Backspace count={16} delay={1500} />
                    <span> Python </span>
                    <Typist.Backspace count={16} delay={1500} />
                    <span> SQL </span>
                    <Typist.Backspace count={4} delay={1500} />
                    <span> Test Driven Development </span>
                    <Typist.Backspace count={24} delay={1500} />
                    <Blink color='white' text='Full Stack Software Engineer' fontSize='500'>
                        Testing the Blink
                    </Blink>
                </Typist>

            </p>
            <div class="container demo">
                <div class="content">
                    <div id="large-header" class="large-header">
                        <canvas id="demo-canvas"></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkills