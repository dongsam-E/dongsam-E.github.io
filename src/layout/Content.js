import Banner from '../component/Banner'
import About from '../component/About'
import Skills from '../component/Skills'
import Portfolio from '../component/Portfolio'
import Interview from '../component/Interview'

function Content(props) {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Interview></Interview>
        </>
    )
}

export default Content