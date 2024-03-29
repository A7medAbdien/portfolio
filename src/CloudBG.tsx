import { FC, Suspense } from 'react'
import Clouds from './components/Clouds'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva';


interface CloudBGProps {
    style: any
    lightColor: string
    camZ: number
}

const CloudBG: FC<CloudBGProps> = ({ style, lightColor, camZ }) => {
    return <>
        <Leva collapsed hidden />
        <Canvas
            style={style}
            camera={{
                fov: 45,
                near: 0.1,
                far: 20,
                position: [0, 0, camZ]
            }}
        >

            <Suspense fallback={null}>
                <Clouds count={1} />
                <directionalLight color={lightColor} intensity={0.8} position={[0, 0, 4]} />
            </Suspense>
        </Canvas >
    </>
}

export default CloudBG