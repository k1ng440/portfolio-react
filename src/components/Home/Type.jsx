import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

const Type = () => {
    return (
        <TypeWriterEffect
            startDelay={100}
            cursorColor="white"
            typeSpeed={200}
            multiTextLoop={true}
            multiText={[
                'Full Stack Engineer',
                'Software Engineer',
                'DevOps Engineer',
            ]}
        />
    );
}

export default Type;
