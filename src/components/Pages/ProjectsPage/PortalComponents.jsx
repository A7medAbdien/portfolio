import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Box, CameraControls, Html, Line, MeshPortalMaterial, Sphere, Text, Torus, useCursor } from '@react-three/drei'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'

import { HeadlineFontProps } from '../../../Utils/fontProps'

extend(geometry)

const smoothTime = 0.4

export function Portal({ id, name, author, bg = '#f1f1f1', width = 1, height = 1.61803398875, children, color = 'black', ...props }) {
    const { viewport } = useThree()
    const { width: viewportWidth } = viewport
    const portal = useRef()
    const [, setLocation] = useLocation()
    const [, params] = useRoute('/:id')
    const [hovered, hover] = useState(false)
    // useCursor(hovered)
    useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, smoothTime, dt))
    return (
        <group {...props}>
            <Text {...HeadlineFontProps} color={color} fontSize={viewportWidth < 4.5 ? 0.4 : 0.5} anchorY="top" anchorX="left" lineHeight={0.8} position={[-1.05, 0.14, 0.01]} >
                {name}
            </Text>

            <mesh name={id} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
                <roundedPlaneGeometry args={[viewportWidth < 4.5 ? width * 0.8 : width, height]} />
                <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
                    <color attach="background" args={[bg]} />
                    {children}
                </MeshPortalMaterial>
            </mesh>
        </group>
    )
}

export function Rig({ position = new THREE.Vector3(0, 0, 6), focus = new THREE.Vector3(0, 0, 0) }) {
    const { scene } = useThree()
    const [, params] = useRoute('/:id')

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, position, smoothTime, delta)
    })

    useEffect(() => {
        const active = scene.getObjectByName(params?.id)
        if (active) {
            active.parent.localToWorld(position.set(0, 0, 4))
            active.parent.localToWorld(focus.set(0, 0, 0))
        }
    })
}
