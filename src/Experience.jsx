import { Scroll, ScrollControls } from '@react-three/drei'

import Clouds from './components/Clouds'
import { Overlay } from './Overlay'


export default function Experience() {


    return <>

        {/* <OrbitControls makeDefault /> */}

        <ScrollControls enabled damping={0.35} pages={1.8} >
            <Scroll>
                <Clouds count={2} />
            </Scroll>
            <Scroll html style={{ width: '100%' }}>
                <Overlay />
            </Scroll>
        </ScrollControls >

        <directionalLight color="#fff" intensity={0.8} position={[0, 0, 3]} />
    </>
}
