import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Leva } from 'leva'
import { Perf } from 'r3f-perf'

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

            {/* <Perf position="top-left" /> */}
            <Experience />
        </Canvas>
    </>
)