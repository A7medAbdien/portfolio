import * as THREE from 'three'

import { useLoader } from "@react-three/fiber"
import { useVideoTexture } from '@react-three/drei'

export const ImageFrame = ({ url }) => {
    const image = useLoader(THREE.TextureLoader, url)
    return <meshBasicMaterial attach="material" map={image} toneMapped={false} />
}

export const VideoFrame = ({ url }) => {
    const texture = useVideoTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}