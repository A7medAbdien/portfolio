import * as THREE from 'three'
import { useRef, useState, createRef, forwardRef } from 'react'
import { Box, Cloud, Html, Line, OrbitControls, Scroll, ScrollControls, Text, useScroll } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { easing } from 'maath'

import IntroPage from './components/IntroPage'
import Divider from './components/Divider'
import ProfilePage from './components/ProfilePage'
import Smoke from './components/Smoke'
import Clouds from './components/ScrollArrow/Clouds'
import ProjectsPage from './components/ProjectsPage'


export default function Experience() {

    const pagesNum = 5
    const { pagesScale, pagesPos } = useControls({
        pagesPos: {
            value: { y: 0.2, z: 2.5 },
            step: 0.1,
        },
        pagesScale: {
            value: 0.85,
            step: 0.01,
        },
    })

    return <>

        <Perf position="top-left" />

        {/* <OrbitControls makeDefault /> */}

        <ScrollControls damping={1} pages={pagesNum} >
            <Scroll>
                <group scale={pagesScale} position={[0, pagesPos.y, pagesPos.z]}>
                    <Pages pagesNum={pagesNum} />
                </group>
                {/* <Clouds count={pagesNum} /> */}
            </Scroll>
        </ScrollControls >

        {/* <Smoke /> */}

        <directionalLight color="#fff" intensity={0.3} position={[-1, 0, 1]} />

        <axesHelper args={[5]} />
    </>
}


const Pages = ({ pagesNum }) => {
    const data = useScroll()

    const { viewport } = useThree()
    const { width, height } = viewport

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
        <ProfilePage pageOffset={- (height / 2)} />

        {/* 
            PAGE 2: Projects 
        */}
        <ProjectsPage pageOffset={- 2 * height} />

        {/*
            PAGE 3: CV
        */}

    </>
}

