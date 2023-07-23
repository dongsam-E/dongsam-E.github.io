import About from '../component/About'
import Skills from '../component/Skills'
import Portfolio from '../component/Portfolio'
import Interview from '../component/Interview'
import Contact from '../component/Contact'

import info from '../data/info'

import Test from '../component/Test'
import testDB from "../data/test"

function Content(props) {
    return (
        <div id={props.id}>
            <About id="aboutMe" info={info}></About>
            <Skills id="skills" info={info}></Skills>
            <Portfolio id="portfolio" info={info}></Portfolio>
            <Interview id="interview" info={info}></Interview>
            <Contact id="contact" info={info}></Contact>
            <Test testdb={testDB}></Test>
        </div>
    )
}

export default Content