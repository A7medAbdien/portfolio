import * as THREE from 'three'
import { useRef, useState, createRef, forwardRef, useEffect } from 'react'
import { Box, Cloud, Html, Image, Line, OrbitControls, Scroll, ScrollControls, Svg, Text, useScroll } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRoute, useLocation } from 'wouter'


import IntroPage from './components/Pages/IntroPage'
import ProfilePage from './components/Pages/ProfilePage'
import CursorSmoke from './components/CursorSmoke'
import Clouds from './components/Clouds'
import ProjectsPage from './components/Pages/ProjectsPage/ProjectsPage'
import { disableScroll, enableScroll } from './Utils/controlScroll'
import ContactPage from './components/Pages/ContactPage'


export default function Experience() {

    const pagesNum = 4

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

    const [, params] = useRoute('/:id')
    const [, setLocation] = useLocation()


    const isParams = () => {
        if (params?.id) {
            return true
        }
        return false;
    }

    const onParamsActiveScroll = () => {
        if (params?.id) {
            disableScroll()
        } else {
            enableScroll()
        }
    }

    useEffect(() => {
        onParamsActiveScroll()
    }, [params?.id])

    useEffect(() => {
        setLocation('/')
    }, [])


    return <>

        <Perf position="top-left" />

        {/* <OrbitControls makeDefault /> */}

        <ScrollControls enabled={!isParams()} damping={0.35} pages={pagesNum} >
            <Scroll>
                <group scale={pagesScale} position={[0, pagesPos.y, pagesPos.z]}>
                    <Pages pagesNum={pagesNum} />
                </group>
                <Clouds count={pagesNum} />
            </Scroll>
        </ScrollControls >

        <CursorSmoke />

        <directionalLight color="#fff" intensity={0.8} position={[0, 0, 3]} />

        {/* <axesHelper args={[5]} /> */}
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
        <ProfilePage pageOffset={- height / 2} />

        {/* 
            PAGE 2: Projects 
        */}
        {/* <ProjectsPage pageOffset={0} /> */}
        <ProjectsPage pageOffset={- 2 * height} />

        {/*
            PAGE 3: CV
        */}
        <ContactPage pageOffset={- 3 * height} />
    </>
}

