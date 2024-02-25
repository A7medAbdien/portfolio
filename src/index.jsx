import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Leva } from 'leva'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Leva collapsed hidden />
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 20,
                position: [0, 0, 6]
            }}
        >

            <Suspense fallback={null}>
                <Experience />
            </Suspense>
        </Canvas>
        <Loader />
    </>
)