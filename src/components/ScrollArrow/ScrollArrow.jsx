import { Html, Text } from '@react-three/drei'

import './ScrollArrow.css'

export default function ScrollArrow({ x, y }) {

    const fontProps = {
        fontSize: 0.1,
        letterSpacing: -0.05,
        lineHeight: 1,
        'material-toneMapped': false
    }

    return <>
        <group
            position={[x, y, 0]}
        >
            <Text position={[0, 0.2, 0]} {...fontProps} >
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
    </>
}