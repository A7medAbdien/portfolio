import { useState } from 'react'
import { Html, Line, OrbitControls, Scroll, ScrollControls, Text, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import ScrollArrow from './ScrollArrow/ScrollArrow'


export default function IntroPage({ showScroll }) {

    const { viewport } = useThree()
    const { height } = viewport
    const { dividerPos, jopTitlePos, scrollPos, namePos } = useControls({
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
        dividerPos: {
            value: { x: 0, y: (- height / 2) },
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

    const points = [
        [-0.3, 0, 0],
        [0.3, 0, 0],
    ]

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

        <Line position={[dividerPos.x, dividerPos.y, 0]} points={points} color={'#fff'} lineWidth={2} />

    </>
}