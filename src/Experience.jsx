import * as THREE from 'three'
import { useRef, useState, createRef, forwardRef } from 'react'
import { Box, Html, Line, OrbitControls, Scroll, ScrollControls, Text, useScroll } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import IntroPage from './components/IntroPage'
import Divider from './components/Divider'
import ProfilePage from './components/ProfilePage'

export default function Experience() {

    const pagesNum = 4

    return <>

        {/* <Perf position="top-left" /> */}

        <OrbitControls makeDefault />

        {/* <ScrollControls damping={0} pages={pagesNum} >
            <Scroll>
                <Pages pagesNum={pagesNum} />
            </Scroll>
        </ScrollControls> */}

        <Smokey />
        <Smoke />
        <directionalLight color="#fff" intensity={0.3} position={[-1, 0, 1]} />

        <axesHelper args={[5]} />
    </>
}

const Smokey = forwardRef((props, ref) => {

    const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png'
    const smokeTexture = useLoader(THREE.TextureLoader, url)
    console.log("j");
    return <>
        <mesh rot ref={ref} {...props}>
            <planeGeometry args={[2.5, 2.5]} />
            <meshLambertMaterial color={'#00dddd'} map={smokeTexture} transparent />
        </mesh>
    </>
})

const Smoke = () => {
    const count = 150
    const refs = useRef(
        Array.from({ length: count }).map(() => createRef())
    );

    useFrame((state, delta) => {
        refs.current.forEach((ref, index) => {
            // console.log("hi");
            ref.current.rotation.z += (delta * 0.2)
        })

    })

    return <>
        <group scale={1}>
            {
                refs.current.map((ref, index) => {
                    console.log("j");
                    return < Smokey
                        ref={ref}
                        key={index}
                        position={
                            [
                                Math.random() * 4 - 2,
                                Math.random() * 4 - 2,
                                Math.random() * 10 - 1
                            ]}
                        rotation={[0, 0, Math.random() * 360]}
                    />
                })
            }
        </group>
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

