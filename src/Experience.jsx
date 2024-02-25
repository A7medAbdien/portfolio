import { Scroll, ScrollControls } from '@react-three/drei'

import Clouds from './components/Clouds'
import { Overlay } from './Overlay'
import { Portal } from './components/Pages/ProjectsPage/PortalComponents'
import InnerClouds from './components/Pages/ProjectsPage/InnerClouds'
import InnerCard from './components/Pages/ProjectsPage/InnerCard'
import calcMaxWidth from './Utils/calcMaxWidth'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'


export default function Experience() {

    const { viewport } = useThree()
    const { width, height } = viewport
    const { titlePos, dividerPos } = useControls("My Work Page", {
        titlePos: {
            value: 1.5,
            step: 0.01,
        },
        dividerPos: {
            value: 0,
            step: 0.01,
        },
    })

    const frameProps = {
        width: calcMaxWidth(width),
        height: height / 4,
    }


    return <>

        {/* <OrbitControls makeDefault /> */}

        <ScrollControls enabled damping={0.35} pages={1.8} >
            <Scroll>
                <Portal position={[0, titlePos, 0]}  {...frameProps} id={"r"} name={"Ahmed.A"} >
                    <InnerClouds count={1} />
                    <ambientLight color={"red"} intensity={0.8} />
                </Portal>
                <Clouds count={2} />
            </Scroll>
            <Scroll html style={{ width: '100%' }}>
                <Overlay />
            </Scroll>
        </ScrollControls >

        <directionalLight color="#fff" intensity={0.8} position={[0, 0, 3]} />
    </>
}
