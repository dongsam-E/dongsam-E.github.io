import Banner from './component/Banner'
import Contact from './component/Contact'
import Interview from './component/Interview'
import Portfolio from './component/Portfolio'

function Content(props) {
    return (
        <>
            <Banner></Banner>
            <Contact></Contact>
            <Interview></Interview>
            <Portfolio></Portfolio>
        </>
    )
}

export default Content