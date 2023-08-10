import { OrbitControls, Text } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience() {

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Text>
            Ahmed
        </Text>
        <Text>
            Abdin
        </Text>

        <axesHelper args={[5]} />

        {/* <mesh scale={1.5}>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh> */}

    </>
}