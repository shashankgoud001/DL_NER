import React from 'react'
import Typewriter from 'typewriter-effect';
import Styles from './Home.module.css'
import Card from './Card'

import ourMission1 from '../media/ourMission1.png'
import ourMission2 from '../media/ourMission2.png'
import ourMission3 from '../media/ourMission3.png'
import ourMission4 from '../media/ourMission4.png'
import im1 from '../media/1.png'
import im2 from '../media/2.png'
import im3 from '../media/3.png'
import im4 from '../media/4.png'
import im5 from '../media/5.png'
import im6 from '../media/6.png'
import im7 from '../media/7.png'
import im8 from '../media/8.png'
import im9 from '../media/9.png'
import im10 from '../media/10.png'
import im11 from '../media/11.png'
import im12 from '../media/12.png'
import im13 from '../media/13.png'
import im14 from '../media/14.png'
import im15 from '../media/15.png'
import im16 from '../media/16.png'
import cardimage1 from '../media/chemicalFactory.png'
import cardimage2 from '../media/GOAirImage.png'
import cardimage3 from '../media/SiliconValleyBankImage.png'
import cardtalksimage1 from '../media/morganStanley.png'
import cardtalksimage2 from '../media/CareersInFinance.png'
import cardtalksimage3 from '../media/SiliconValleyBankImage.png'
const Home = () => {

    const cardsData ={
        "1" : {
            cardimage1,
            "title" : "SPECIALITY CHEMICALS",
            "text" : "A breif analysis about the chemical sector. Focusing mainly on speciality chemicals.",
            "location" : "#",
            "button" : "View Report"
        },
       "2" :  {cardimage2,
            "title" : "GO AIR",
            "text" : "A comprehensive analysis of the Go Air bankruptcy case, shedding light on the intricate details of this industry event",
            "location" : "#",
            "button" : "View Report"
        },
        "3" : {
            cardimage3,
            "title" : "Silicon Valley Bank",
            "text" : "This report delves into the significant challenges and setbacks that have led to the downfall of Silicon Valley Bank.",
            "location" : "#",
            "button" : "View Report"
        }
    }
    const cardsTalksData = {
        "1" : {
            cardtalksimage1,
            "title" : "CORPORATE TALKS",
            "text" : "The managing director and vice president of Morgan Stanley will be sharing their thoughts on the current state of the global economy",
            "location" : "#",
            "button" : "Watch"
        },
       "2" :  {cardtalksimage2,
            "title" : "CAREERS IN FINANCE",
            "text" : "This Series covers all the available opportunities to those who want to take Finance as a Career choice",
            "location" : "#",
            "button" : "Watch"
        },
        "3" : {
            cardtalksimage3,
            "title" : "INVESTMENT BASICS",
            "text" : "This Series covers all the basics of investment like Fundamental and Technical Analysis.",
            "location" : "#",
            "button" : "Watch"
        }
    }
    
        return (
        <div>
            <div id={Styles.wallpaper}>
                <div id={Styles.text_box} >
                    <h1>Kharagpur Investment Group</h1>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "Welcomes You...",
                                "Let's talk about finance...",
                                "Stocks...",
                                "Investments..."
                            ],
                        }}
                    />
                </div>
            </div>
            <div id = {Styles.ourMission}>
                        <div id={Styles.missionBox}>
                            <h3 id={Styles.ourMissionHeading}>OUR MISSION</h3>
                            <p id={Styles.ourMissionText}>“Our aim is that every student should be investing in any way to achieve financial freedom sooner.”</p>
                            <a href='/about' >
                            <button id={Styles.ourMissionButton}> About Us</button>
                            </a>
                        </div>
                        <div id={Styles.ourMissionImages}>
                            <img src={ourMission1} id={Styles.ourMission1} alt='Image1'></img>
                            <img src={ourMission2} id={Styles.ourMission2} alt='Image2'></img>
                            <img src={ourMission3} id={Styles.ourMission3} alt='Image3'></img>
                            <img src={ourMission4} id={Styles.ourMission4} alt='Image4'></img>
                        </div>
            </div>
            <div id={Styles.currentActivites}>
                <div id={Styles.Activity1}> 
                    <h4>
                        Guest Speaker Series
                    </h4> 
                </div>
                <div id={Styles.Activity2}>
                    <h4>
                        Portfolio Analysis
                        </h4>
                    </div>
                <div id={Styles.Activity3}>
                    <h4>
                    Educational Workshops

                    </h4>
                    </div>

                <div id={Styles.Activity4}>
                    <h4>
                    Case Study Analysis

                    </h4>
                    </div>
                <div id={Styles.Activity5}>
                    <h4>
                    Research Sessions

                    </h4>
                    </div>
                <div id={Styles.Activity6}>
                    <h4>

                    Guest Speaker Series
                    </h4>
                    </div>
            </div>

            <div id={Styles.Gallery}>
                
                    <img src={im1} id={Styles.im1}></img>
                    <img src={im2} id={Styles.im2}></img>
                    <img src={im3} id={Styles.im3}></img>
                    <img src={im4} id={Styles.im4}></img>
                
                    <img src={im5} id={Styles.im5}></img>
                    <img src={im6} id={Styles.im6}></img>
                    <img src={im7} id={Styles.im7}></img>
                    <img src={im8} id={Styles.im8}></img>
                
                    <img src={im9} id={Styles.im9}></img>
                    <img src={im10} id={Styles.im10}></img>
                    <img src={im11} id={Styles.im11}></img>
                    <img src={im12} id={Styles.im12}></img>
                
                    <img src={im13} id={Styles.im13}></img>
                    <img src={im14} id={Styles.im14}></img>
                    <img src={im15} id={Styles.im15}></img>
                    <img src={im16} id={Styles.im16}></img>
                
            </div>
            <div id={Styles.Reports}>
                <h2>Reports</h2>
                <div id={Styles.CardsBox}>

                        <Card image={cardsData[1].cardimage1} title={cardsData[1].title} text={cardsData[1].text} location={cardsData[1].location} button={cardsData[1].button}></Card>
                        <Card image={cardsData[2].cardimage2} title={cardsData[2].title} text={cardsData[2].text} location={cardsData[2].location} button={cardsData[2].button}></Card>
                        <Card image={cardsData[3].cardimage3} title={cardsData[3].title} text={cardsData[3].text} location={cardsData[3].location} button={cardsData[3].button}></Card>
                </div>
            </div>
            <div id={Styles.ourTeam}>
                        <div id={Styles.teamContent}>

                        <h2>MEET OUR TEAM</h2>
                        <p>We are a passionate group of students dedicated to fostering financial literacy and investment education among the students of Kharagpur.</p>
                        <a>
                        <button>Our Team</button>
                        </a>
                        </div>
                        <img src={im16}></img>
            </div>
            <div id={Styles.Talks}>
                <h2>Talks</h2>
                <div id={Styles.TalksCardsBox}>

                        <Card image={cardsTalksData[1].cardtalksimage1} title={cardsTalksData[1].title} text={cardsTalksData[1].text} location={cardsTalksData[1].location} button={cardsTalksData[1].button}></Card>
                        <Card image={cardsTalksData[2].cardtalksimage2} title={cardsTalksData[2].title} text={cardsTalksData[2].text} location={cardsTalksData[2].location} button={cardsTalksData[2].button}></Card>
                        <Card image={cardsTalksData[3].cardtalksimage3} title={cardsTalksData[3].title} text={cardsTalksData[3].text} location={cardsTalksData[3].location} button={cardsTalksData[3].button}></Card>
                </div>
            </div>
        </div>
    )
}

export default Home
