import React from 'react';
import '../../styles/Portfolio.css';
import gitHubIcon from '../../assets/images/icons/github-mark-dark-32px.png'

export default function Portfolio() {
    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="title-container">
                    <p>Portfolio</p>
                </div>
                <div className="portfolio">
                    <div className="grid">
                        <div className="box box1">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://caitkidd.github.io/Code-Quiz/">
                                    </a>    
                                       Code Quiz
                                    <a href="https://github.com/CaitKidd/Code-Quiz.git">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                </div>                                                               
                            </div>                            
                        </div>
                        <div className="box box2">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://paragasr.github.io/Insomniacs-Dashboard/">
                                        Project 2
                                    </a>          
                                    <a href="https://paragasr.github.io/Insomniacs-Dashboard/">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                </div>                                                               
                            </div>                            
                        </div>
                        <div className="box box3">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://caitkidd.github.io/Weather-Dashboard/">
                                        Weather Dashboard
                                    </a>          
                                    <a href="https://github.com/CaitKidd/Weather-Dashboard.git">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                </div>                                                               
                            </div>                            
                        </div>
                        <div className="box box4">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://caitkidd.github.io/Work-Day-Scheduler/">
                                        Work Day Scheduler
                                    </a>          
                                    <a href="https://github.com/CaitKidd/Work-Day-Scheduler.git">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                </div>                                                               
                            </div>                            
                        </div>
                        <div className="box box5">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://caitkidd.github.io/Password-Generator/">
                                        Password Generator
                                    </a>          
                                    <a href="https://github.com/CaitKidd/Password-Generator.git">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                </div>
            </div>           
        </div>
    );
}