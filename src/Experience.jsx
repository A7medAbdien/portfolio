import * as THREE from 'three'
import { useRef, useState, createRef, forwardRef } from 'react'
import { Box, Cloud, Html, Line, OrbitControls, Scroll, ScrollControls, Text, useScroll } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import IntroPage from './components/IntroPage'
import Divider from './components/Divider'
import ProfilePage from './components/ProfilePage'

export default function Experience() {

    const pagesNum = 4
    const cloudCount = Array(pagesNum).fill(0)
    const { viewport } = useThree()
    const { width, height } = viewport
    const { cloudPos } = useControls({
        cloudPos: {
            value: { x: width / 2.5, y: 0 },
            joystick: 'invertY',
            step: 0.1,
        },
    })

    const cloudProps = {
        speed: 0.25,
        opacity: "1",
        depth: "1",
        width: "1",
        segments: "4"
    }
    return <>

        <Perf position="top-left" />

        {/* <OrbitControls makeDefault /> */}

        <ScrollControls damping={0} pages={pagesNum} >
            <Scroll>
                <Pages pagesNum={pagesNum} />
                {cloudCount.map((_, i) => <>
                    < Cloud
                        {...cloudProps}
                        position={[cloudPos.x, -i * height, 0]}
                    />
                    < Cloud
                        {...cloudProps}
                        position={[-cloudPos.x, -i * height, 0]}
                    />
                </>)}
            </Scroll>
        </ScrollControls>



        <directionalLight color="#fff" intensity={0.3} position={[-1, 0, 1]} />

        {/* <axesHelper args={[5]} /> */}
    </>
}




const Pages = ({ pagesNum }) => {
    const data = useScroll()
    const [showScroll, setShowScroll] = useState(true)
    useFrame(() => {
        if (data.offset < (1 / pagesNum) / 20) setShowScroll(true)
        else setShowScroll(false)
    })

    return <>

        {/* 
            PAGE 0: intro
        */}
        <IntroPage showScroll={showScroll} />

        {/*
            PAGE 1: Profile & Skills
        */}
        <ProfilePage />

        {/* 
            PAGE 2: Projects 
        */}

        {/*
            PAGE 3: CV
        */}

    </>
}

