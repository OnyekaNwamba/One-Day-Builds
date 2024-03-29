import React from 'react';
import Typewriter from 'Typewriter';
import Scrollchor from 'react-scrollchor';

class Hero extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hero-container">
                <Typewriter className="hero-title" text="Onyeka Nwamba" />
                <div className="hero-description">
                    I am a Computer Science student at Queen Mary, University of London and programming is my passion,
                    Welcome to my website.<br />Check out my{' '}
                    <Scrollchor to="#projects">side-projects</Scrollchor> below.
                </div>
            </div>
        );
    }
}

export default Hero;
