import About from '../component/About'
import Skills from '../component/Skills'
import Portfolio from '../component/Portfolio'
import Interview from '../component/Interview'
import Contact from '../component/Contact'
import Insta from '../component/Insta'
import Button from '../component/Button'

function Content(props) {
    return (
        <div id={props.id}>
            <About id="aboutMe" info={props.info}></About>
            <Skills id="skills" info={props.info}></Skills>
            <Portfolio id="portfolio" info={props.info}></Portfolio>
            <Interview id="interview" info={props.info}></Interview>
            <Contact id="contact" info={props.info}></Contact>
            <Insta id="insta" info={props.info}></Insta>
            <Button id="button"></Button>
        </div>
    )
}

export default Content