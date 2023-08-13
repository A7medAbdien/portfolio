import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Box, CameraControls, Html, Line, MeshPortalMaterial, Sphere, Text, Torus, useCursor } from '@react-three/drei'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'

import ScrollArrow from './ScrollArrow/ScrollArrow'
import Divider from './Divider'
import calcMaxWidth from '../Utils/calcMaxWidth'
import headlineFontProps from '../Utils/headlineFontProps'
import Clouds from './Clouds'
import InnerClouds from './InnerClouds'

extend(geometry)

export default function ProjectsPage({ pageOffset }) {

    const { viewport } = useThree()
    const { width, height } = viewport
    const { projectsPageDividerPos, jopTitlePos, scrollPos, titlePos } = useControls({
        titlePos: {
            value: 1.2,
            step: 0.01,
        },
        jopTitlePos: {
            value: { x: 0, y: pageOffset - height / 2 - 1.25 },
            joystick: 'invertY',
            step: 0.01,
        },
        scrollPos: {
            value: { x: 0, y: pageOffset - (height / 2) + 0.2 },
            joystick: 'invertY',
            step: 0.01,
        },
        projectsPageDividerPos: {
            value: 0.5,
            step: 0.01,
        },
    })
    console.log("ji");


    return <>
        <group position={[0, pageOffset, 0]} >
            {/* <Box position={[0, 0, 0]} /> */}

            <group position={[0, titlePos, 0]} >
                <Text
                    {...headlineFontProps}>
                    {"{ MY  WORK }"}
                </Text >
            </group>


            <Frame id="01" width={calcMaxWidth(width)} height={height / 6} name="ArtMixer" bg="#fff" >

                <InnerClouds count={1} />
                <ambientLight color="black" intensity={0.8} />
            </Frame>

            {/* <Frame id="02" width={calcMaxWidth(width)} height={height / 6} name="SafeDistance" bg="#d1d1ca" position={[0, -height / 3, 0]}>
                <Sphere position={[0, 0, -5]} />
            </Frame>
            <Frame id="03" width={calcMaxWidth(width)} height={height / 6} name="ToxicTweets" bg="#c8daf7" position={[0, -4 * height / 6, 0]}>
                <Torus position={[0, 0, -5]} />
            </Frame> */}

            <Rig />
        </group>
    </>
}


function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
    const { viewport } = useThree()
    const { width: viewportWidth } = viewport
    const portal = useRef()
    const [, setLocation] = useLocation()
    const [, params] = useRoute('/item/:id')
    const [hovered, hover] = useState(false)
    useCursor(hovered)
    useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
    return (
        <group {...props}>
            <Text {...headlineFontProps} fontSize={viewportWidth < 4.5 ? 0.25 : 0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-width / 2 + 0.1, 0.14, 0.01]} >
                {name}
            </Text>
            <Text {...headlineFontProps} anchorX="right" position={[width / 2 - 0.1, -height / 2 + 0.11, 0.01]} >
                /{id}
            </Text>
            <mesh name={id} onClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
                <roundedPlaneGeometry args={[width, height]} />
                <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
                    <color attach="background" args={[bg]} />
                    {children}
                </MeshPortalMaterial>
            </mesh>
        </group>
    )
}

function Rig({ position = new THREE.Vector3(0, 0, 6), focus = new THREE.Vector3(0, 0, 0) }) {
    const { controls, scene } = useThree()
    const [, params] = useRoute('/item/:id')
    useEffect(() => {
        const active = scene.getObjectByName(params?.id)
        if (active) {
            active.parent.localToWorld(position.set(0, 0.5, 0.25))
            active.parent.localToWorld(focus.set(0, 0, -2))
        }
        controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
    })
    // return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}