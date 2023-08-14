import * as THREE from 'three'
import { useRef, createRef, forwardRef } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { easing } from 'maath'

const Smokey = forwardRef(({ color = '#00bbbb', ...props }, ref) => {

    const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png'
    const smokeTexture = useLoader(THREE.TextureLoader, url)
    return <>
        <mesh rot ref={ref} {...props}>
            <planeGeometry args={[2.5, 2.5]} />
            <meshLambertMaterial color={color} map={smokeTexture} transparent />
        </mesh>
    </>
})

const CursorSmoke = ({ count = 10, ratio = 1 }) => {
    const { smokePose } = useControls({
        smokePose: {
            value: 2.5,
            step: 0.1,
        },
    })

    const { viewport } = useThree()
    const { width, height } = viewport
    const scale = width > 7.2 ? (width / height) * 0.25 : (width / height) * 0.5
    console.log(width, height);

    const refs = useRef(
        Array.from({ length: count }).map(() => createRef())
    );
    const smokeGroup = useRef()

    useFrame((state, delta) => {
        refs.current.forEach((ref, index) => {
            ref.current.rotation.z -= (delta * 0.2)
        })
        easing.damp3(smokeGroup.current.position,
            [
                (state.mouse.x * state.viewport.width) / 2,
                (state.mouse.y * state.viewport.height) / 2,
                smokePose
            ]
            , 1, delta)

    })


    return <>
        <group ref={smokeGroup} scale={scale}>
            {refs.current.map((ref, index) =>
                < Smokey
                    ref={ref}
                    key={index + "Smoke"}
                    position={
                        [
                            Math.random() * ratio - ratio / 2,
                            Math.random() * ratio - ratio / 2,
                            (Math.random() * (ratio) - (ratio))
                        ]}
                    rotation={[0, 0, Math.random() * 360]}
                />
            )}
        </group>
    </>
}

export default CursorSmoke