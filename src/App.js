import Hd from './layout/Hd'
import Content from './layout/Content'

import info from './data/info.json'

function App(props) {
    return (
        <>
        <Hd id="hd" info={info}></Hd>
        <Content id="content" info={info}></Content>
        </>
    )
}

export default App
