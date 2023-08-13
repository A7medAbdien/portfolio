import { Box, Cloud } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'

const Clouds = ({ count }) => {
    const cloudCount = Array(count).fill(0)
    const { viewport } = useThree()
    const { width, height } = viewport
    const { cloudPos } = useControls({
        cloudPos: {
            value: { x: width / 2.5, y: -1 },
            joystick: 'invertY',
            step: 0.1,
        },
    })

    const cloudProps = {
        speed: 0.25,
        opacity: "0.7",
        depth: "1",
        width: "1",
        segments: "4"
    }

    return <>
        {cloudCount.map((_, i) => (
            <group key={i} >
                < Cloud
                    {...cloudProps}
                    position={[cloudPos.x, -i * height, cloudPos.y]}
                />
                < Cloud
                    {...cloudProps}
                    position={[-cloudPos.x, -i * height, cloudPos.y]}
                />
                < Cloud
                    {...cloudProps}
                    position={[
                        (Math.random() * width / 2) - width / 4,
                        (-i + 0.5) * height,
                        cloudPos.y - Math.random() * width / 2 - width / 4
                    ]}
                />
                < Cloud
                    {...cloudProps}
                    position={[
                        (Math.random() * width) - width / 2,
                        -(i + 0.5) * height,
                        cloudPos.y - Math.random()
                    ]}
                />
            </group>
        ))}
    </>
}

export default Clouds