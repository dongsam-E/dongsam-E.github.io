import Banner from '../component/Banner'
import About from '../component/About'
import Skills from '../component/Skills'
import Portfolio from '../component/Portfolio'
import Interview from '../component/Interview'
import Contact from '../component/Contact'

import aboutDB from "../data/about"
import skillDB from "../data/skills"
import portDB from "../data/portfolio"
import interviewDB from "../data/interview"
import contactDB from "../data/contact"

function Content(props) {
    return (
        <div id={props.id}>
            <Banner id="banner"></Banner>
            <About id="aboutMe" aboutdb={aboutDB}></About>
            <Skills id="skills" skilldb={skillDB}></Skills>
            <Portfolio id="portfolio" portdb={portDB}></Portfolio>
            <Interview id="interview" interviewdb={interviewDB}></Interview>
            <Contact id="contact" contactdb={contactDB}></Contact>
        </div>
    )
}

export default Content