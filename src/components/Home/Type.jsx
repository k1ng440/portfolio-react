import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

const Type = () => {
    return (
        <TypeWriterEffect
            startDelay={100}
            cursorColor="black"
            typeSpeed={200}
            multiText={[
                'Software Engineer',
                'Full Stack Engineer',
                'DevOps Engineer',
            ]}
        />
    );
}

export default Type;
