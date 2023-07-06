import Hd from './layout/Hd'
import Content from './layout/Content'
import Ft from './layout/Ft'

import hdDB from './data/hd'

function App(props) {
    return (
        <>
        <Hd id="hd" hddb={hdDB}></Hd>
        <Content id="content"></Content>
        <Ft id="ft"></Ft>
        </>
    )
}

export default App
