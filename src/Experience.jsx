import { useState } from 'react'
import { Html, OrbitControls, Scroll, ScrollControls, Text, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import ScrollArrow from './components/ScrollArrow/ScrollArrow'

export default function Experience() {

    const pagesNum = 5

    return <>

        <Perf position="top-left" />

        {/* <OrbitControls makeDefault /> */}

        <ScrollControls damping={0} pages={pagesNum} >
            <Scroll style={{ overflowX: 'hidden' }}>
                <Pages pagesNum={pagesNum} />
            </Scroll>
        </ScrollControls>

        <axesHelper args={[5]} />
    </>
}

const Pages = ({ pagesNum }) => {
    const data = useScroll()
    const [showScroll, setShowScroll] = useState(true)
    useFrame(() => {
        if (data.offset < (1 / pagesNum) / 20) setShowScroll(true)
        else setShowScroll(false)
    })

    const { viewport } = useThree()
    const { width, height } = viewport
    const { jopTitlePos, scrollPos, namePos } = useControls({
        scrollPos: {
            value: { x: 0, y: (- height / 2) + 0.2 },
            joystick: 'invertY',
            step: 0.01,
        },
        jopTitlePos: {
            value: { x: 0, y: -1.25 },
            joystick: 'invertY',
            step: 0.01,
        },
        namePos: {
            value: { x: 0, y: 1 },
            joystick: 'invertY',
            step: 0.01,
        },
    })

    const fontProps = {
        font: 'fonts/SaolDisplay-Regular.woff',
        fontSize: 0.1,
        letterSpacing: -0.05,
        lineHeight: 1,
        'material-toneMapped': false
    }

    return <>
        <group position={[namePos.x, namePos.y, 0]}>
            <Text
                {...fontProps}
                position={[0, 0.4, 0]}>
                {"{ PORTFOLIO }"}
            </Text >

            <Text
                {...fontProps}
                fontSize={0.4}>
                AHMED.A
            </Text >
        </group>

        <group position={[jopTitlePos.x, jopTitlePos.y, 0]}>
            <Text
                {...fontProps}
                fontSize={0.2}>
                Software Developer
            </Text >
        </group>

        {showScroll && <ScrollArrow x={scrollPos.x} y={scrollPos.y} />}
    </>
}