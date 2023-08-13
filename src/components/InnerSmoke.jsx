import * as THREE from 'three'
import { useRef, createRef, forwardRef, useEffect } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { easing } from 'maath'
import { SpotLight, useDepthBuffer } from '@react-three/drei'
import { saveAs } from 'file-saver';
import { INNER_SMOKE_POS } from '../Utils/innerSmokePose'
const Smokey = forwardRef(({ color, ...props }, ref) => {

    const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png'
    const smokeTexture = useLoader(THREE.TextureLoader, url)
    return <>
        <mesh rot ref={ref} {...props}>
            <planeGeometry args={[4, 4]} />
            <meshLambertMaterial color={color} map={smokeTexture} transparent />
        </mesh>
    </>
})

function MovingSpot({ vec = new THREE.Vector3(), ...props }) {
    const light = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame((state) => {
        light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
        light.current.target.updateMatrixWorld()
    })
    return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={5} {...props} />
}

const InnerSmoke = ({ position, color = '#00bbbb', count = 150, ratio = 1 }) => {
    const { smokePose } = useControls({
        smokePose: {
            value: 2.5,
            step: 0.1,
        },
    })
    const randoms = []

    const { viewport } = useThree()
    const { width, height } = viewport
    const scale = 1

    const refs = useRef(
        Array.from({ length: count }).map(() => createRef())
    );
    const smokeGroup = useRef()
    const depthBuffer = useDepthBuffer({ frames: 1 })

    useFrame((state, delta) => {
        refs.current.forEach((ref, index) => {
            ref.current.rotation.z -= (delta * 0.2)
        })
    })

    useEffect(() => {
        const saveArrayToFile = (array) => {
            const json = JSON.stringify(array);
            const currentTime = new Date().toISOString().replace(/:/g, '-');
            const filename = `array_${currentTime}.json`;
            const blob = new Blob([json], { type: 'application/json' });
            saveAs(blob, filename);
        };
        // saveArrayToFile(randoms);

    })


    return <>
        <group position={position} ref={smokeGroup} scale={scale}>
            {refs.current.map((ref, i) => {
                const random = {
                    x: Math.random(),
                    y: Math.random(),
                    z: Math.random(),
                }
                const { x, y, z } = {
                    x: (random.x * width / 4) - width / 8,
                    y: random.y * (height + 0.2) - (height + 0.2) / 2,
                    z: (random.z * 2 * height - height) - 5
                }

                // const { x, y, z } = INNER_SMOKE_POS[i]

                // randoms.push(random)
                return < Smokey
                    ref={ref}
                    key={i + "Smoke"}
                    color={color}
                    position={
                        [
                            x,
                            y,
                            z
                        ]}
                    rotation={[0, 0, Math.random() * 360]}
                />
            })}
        </group>

        {/* <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[0, 0, 0]} /> */}

    </>
}

export default InnerSmoke