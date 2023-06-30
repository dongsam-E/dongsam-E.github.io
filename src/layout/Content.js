import Banner from '../component/Banner'
import About from '../component/About'
import Skills from '../component/Skills'
import Portfolio from '../component/Portfolio'
import Interview from '../component/Interview'

function Content(props) {
    return (
        <div id={props.id}>
            <Banner id="banner"></Banner>
            <About id="about"></About>
            <Skills id="skills"></Skills>
            <Portfolio id="portfolio"></Portfolio>
            <Interview id="interview"></Interview>
        </div>
    )
}

export default Content