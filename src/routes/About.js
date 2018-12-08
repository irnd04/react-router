import React from 'react';

const About = ({match}) => {
    return (
        <div>
            <div>{match.params.username}</div>
            <div>{match.params.password}</div>
            <div>About</div>
        </div>
    );
};

export default About;