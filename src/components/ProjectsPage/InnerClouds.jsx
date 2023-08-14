import { Box, Cloud } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'

const InnerClouds = ({ count }) => {
    const cloudCount = Array(count).fill(0)
    const { viewport } = useThree()
    const { width, height } = viewport
    const { innerCloudPos } = useControls("Inner Clouds", {
        innerCloudPos: {
            value: { x: 3, z: -5 },
            step: 0.1,
        },
    })

    const cloudProps = {
        speed: 0.25,
        opacity: "0.75",
        depth: "1",
        width: "1",
        segments: "4"
    }

    return <>
        <group >
            < Cloud
                {...cloudProps}
                position={[width / innerCloudPos.x, height / innerCloudPos.x, innerCloudPos.z]}
            />
            < Cloud
                {...cloudProps}
                position={[0, 0, innerCloudPos.z]}
            />
            < Cloud
                {...cloudProps}
                position={[-width / innerCloudPos.x, -height / innerCloudPos.x, innerCloudPos.z]}
            />
        </group>
    </>
}

export default InnerClouds