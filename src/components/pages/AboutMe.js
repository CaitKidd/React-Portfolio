import React from 'react';
import '../../styles/AboutMe.css'
import professionalPic from '../../assets/images/headshot.jpeg';


export default function AboutMe() {
    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="title-container">
                    <p>about me</p>
                </div>
                <div className="image-container">
                    <img className="professional-pic" src={professionalPic} alt="my professional pic" />
                </div>
                <div className="description-container">
                    <p className="bio">
                        Completing a certificate in Full Stack Web Development at University of Denver, I have shaped my
                        experience and knowledge in front-end and back-end in technologies, programming languages, and framework.
                        In browser based technologies I know HTML, CSS, JavaScript, and jQuery. JavaScript core knowledge; I know
                        client side framework, Asynchronous Programming and writing Cross-Browser code. I can use Git and Heroku for
                        codebase. Also for programming I am efficient in Server Side Development for Node.js, Express, and MERN Stack.
                    </p>
                </div>
            </div>
        </div>
    );
}