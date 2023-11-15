import * as THREE from 'three'

import { useCursor, useVideoTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { easing } from 'maath';
import { useRoute } from 'wouter';
import { HeadlineFontProps } from './fontProps';

export const HoverableFrame = ({ alwaysActive = false, children, position, rotation, shrinkX = 0.9, shrinkY = 0.9, changeColor = false, changeColorTo = "#006666", ...props }) => {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [, params] = useRoute('/:id')
    const isActive = alwaysActive ? true : params?.id != null

    useCursor(hovered)
    useFrame((state, dt) => {
        easing.damp3(meshRef.current.scale, [(isActive && hovered ? shrinkX : 1), (isActive && hovered ? shrinkY : 1), 1], 0.1, dt)
        changeColor && easing.dampC(meshRef.current.material.color, hovered ? changeColorTo : '#fff')
        // console.log(meshRef.current);
    })

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={[1, 0.5]}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={() => setHovered(false)}
            position={position}
            rotation={rotation}
        >
            {children}
        </mesh>
    )
}
export const HoverableTextFrame = ({ alwaysActive = false, width = 2, height = 1, children, ...props }) => {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [, params] = useRoute('/:id')
    const isActive = alwaysActive ? true : params?.id != null

    useCursor(hovered)
    useFrame((_, dt) => {
        easing.damp(meshRef.current.children[0], "letterSpacing", isActive && hovered ? 0.15 : HeadlineFontProps.letterSpacing, 0.1, dt)
        // console.log(meshRef.current);
        // console.log(isActive && hovered);
    })

    return (
        <group
            ref={meshRef}
            {...props}
        >
            {children}
            <mesh
                onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
                onPointerOut={() => setHovered(false)}
                position={[0, 0, 0.01]}
            >
                <planeGeometry args={[HeadlineFontProps.fontSize * width, HeadlineFontProps.fontSize * height]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>
        </group>
    )
}

export const LogoFrame = ({ url, color = '#fff', ...props }) => {
    const logoTexture = useLoader(THREE.TextureLoader, url)
    return <>
        <meshBasicMaterial color={color} map={logoTexture} transparent />
    </>
}

export const ImageFrame = ({ url, ...props }) => {
    const image = useLoader(THREE.TextureLoader, url)
    return <meshBasicMaterial  {...props} map={image} toneMapped={false} />
}

export const VideoFrame = ({ url, ...props }) => {
    const texture = useVideoTexture(url)
    return <meshBasicMaterial {...props} map={texture} toneMapped={false} />
}