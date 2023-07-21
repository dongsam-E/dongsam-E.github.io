import Hd from './layout/Hd'
import Content from './layout/Content'
import Ft from './layout/Ft'

import info from './data/info'

function App(props) {
    return (
        <>
        <Hd id="hd" info={info}></Hd>
        <Content id="content"></Content>
        <Ft id="ft"></Ft>
        </>
    )
}

export default App
