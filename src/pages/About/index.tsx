import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>About/index.tsx</h1>
            <h2>Aboutページ</h2>
            <Link to="./details/001">詳細の001ページへ</Link>
        </div>
    )
}

export default About