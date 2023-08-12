import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Box, CameraControls, Html, Line, MeshPortalMaterial, Text, useCursor } from '@react-three/drei'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'

import ScrollArrow from './ScrollArrow/ScrollArrow'
import Divider from './Divider'

extend(geometry)

export default function ProjectsPage({ pageOffset }) {

    const { viewport } = useThree()
    const { height } = viewport
    const { projectsPageDividerPos, jopTitlePos, scrollPos, namePos } = useControls({
        namePos: {
            value: { x: 0, y: pageOffset - 1 },
            joystick: 'invertY',
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
            value: { x: 0, y: pageOffset - (height / 2) },
            joystick: 'invertY',
            step: 0.01,
        },
    })

    const fontProps = {
        font: 'fonts/SaolDisplay-Regular.woff',
        fontSize: 0.1,
        letterSpacing: 0,
        lineHeight: 1,
        'material-toneMapped': false
    }

    return <>
        <group >
            <Frame id="02" name="tea" bg="#e4cdac" author="Omar Faruq Tawsif">
                <Box position={[0, 0, -5]} />
            </Frame>

            <Rig />
        </group>
    </>
}


function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
    const portal = useRef()
    const [, setLocation] = useLocation()
    const [, params] = useRoute('/item/:id')
    const [hovered, hover] = useState(false)
    useCursor(hovered)
    useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
    return (
        <group {...props}>
            <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
                {name}
            </Text>
            <Text fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
                /{id}
            </Text>
            <Text fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
                {author}
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