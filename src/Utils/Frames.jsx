import * as THREE from 'three'

import { useCursor, useVideoTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { easing } from 'maath';
import { useRoute } from 'wouter';

export const HoverableFrame = ({ children, position, rotation, shrinkX = 0.9, shrinkY = 0.9, colorNotScale = false }) => {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [, params] = useRoute('/:id')
    const isActive = params?.id != null

    useCursor(hovered)
    useFrame((state, dt) => {
        !colorNotScale && easing.damp3(meshRef.current.scale, [(isActive && hovered ? shrinkX : 1), (isActive && hovered ? shrinkY : 1), 1], 0.1, dt)
        colorNotScale && easing.dampC(meshRef.current.children[0].material.color, hovered ? '#4f75ca' : '#000')
    })

    return (
        <mesh
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

export const ImageFrame = ({ url, ...props }) => {
    const image = useLoader(THREE.TextureLoader, url)
    return <meshBasicMaterial  {...props} map={image} toneMapped={false} />
}

export const VideoFrame = ({ url, ...props }) => {
    const texture = useVideoTexture(url)
    return <meshBasicMaterial {...props} map={texture} toneMapped={false} />
}