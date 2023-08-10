import { Html, OrbitControls, Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

export default function Experience() {

    const { viewport } = useThree()
    const { width, height } = viewport
    const { navPos, scrollPos, namePos } = useControls({
        scrollPos: {
            value: { x: 0, y: (- height / 2) + 0.2 },
            joystick: 'invertY',
            step: 0.01,
        },
        namePos: {
            value: { x: 0, y: 1 },
            joystick: 'invertY',
            step: 0.01,
        },
        // navPos: {
        //     value: { x: (width / 2) - 0.1, y: 0 },
        //     joystick: 'invertY',
        //     step: 0.01,
        // }
    })

    const fontProps = {
        font: 'fonts/SaolDisplay-Regular.woff',
        fontSize: 0.1,
        letterSpacing: -0.05,
        lineHeight: 1,
        'material-toneMapped': false
    }

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <group position={[namePos.x, namePos.y, 0]}>
            <Text
                {...fontProps}
                position={[0, 0.4, 0]}>
                {"{ PORTFOLIO }"}
            </Text >

            <Text
                {...fontProps}
                fontSize={0.4}>
                AHMED.A
            </Text >

        </group>

        {/* <group rotation={[0, 0, Math.PI / 2]} position={[navPos.x, navPos.y, 0]}>
                <Text position={[-0.4 * height / 3, 0, 0]} {...fontProps}>
                    Hi
                </Text >
                <Text color={"red"} {...fontProps}>
                    PROJECTS
                </Text >
                <Text position={[0.4 * height / 3, 0, 0]} {...fontProps}>
                    CV
                </Text >
        </group> */}


        <group
            position={[scrollPos.x, scrollPos.y, 0]}
        >
            <Text position={[0, 0.2, 0]} {...fontProps} font=''>
                Scroll
            </Text >
            <Html
                transform
                scale={0.1}
                position={[-0.1, -0.1, 0]}
            >

                <div className="downArrow bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 32 32">
                        <path fill="#fff" d="M24.285,11.284L16,19.571l-8.285-8.287L6,12.999L16,23l10-10.001L24.285,11.284z" rx="5" ry="5" />
                    </svg>
                </div>
            </Html>
        </group>
        <axesHelper args={[5]} />

        {/* <mesh scale={1.5}>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh> */}

    </>
}