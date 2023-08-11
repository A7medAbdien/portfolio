import { useState } from 'react'
import { Html, Line, OrbitControls, Scroll, ScrollControls, Text, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import IntroPage from './components/IntroPage'

export default function Experience() {

    const pagesNum = 4

    return <>

        <Perf position="top-left" />

        {/* <OrbitControls makeDefault /> */}

        <ScrollControls damping={0} pages={pagesNum} >
            <Scroll>
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

    return <>

        {/* 
            PAGE 0: intro
        */}
        <IntroPage showScroll={showScroll} />

        {/*
            PAGE 1: Profile & Skills
        */}

        {/* 
            PAGE 2: Projects 
        */}

        {/*
            PAGE 3: CV
        */}

    </>
}

