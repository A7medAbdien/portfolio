import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import Divider from './Divider'
import calcMaxWidth from '../Utils/calcMaxWidth'
import headlineFontProps from '../Utils/headlineFontProps'

export default function ProfilePage({ pageOffset }) {

    const { viewport } = useThree()
    const { width, height } = viewport

    const { dividerPos, profilePos, canDoPos, skillPos } = useControls({
        profilePos: {
            value: -0.5,
            step: 0.01,
        },
        canDoPos: {
            value: -2,
            step: 0.01,
        },
        skillPos: {
            value: -3.8,
            step: 0.01,
        },
        dividerPos: {
            value: 0.5,
            step: 0.01,
        },
    })

    const contentFontProps = {
        fontSize: 0.1,
        lineHeight: 1.2,
        maxWidth: calcMaxWidth(width),
        textAlign: 'left',
        'material-toneMapped': false
    }

    return <>
        <group position={[0, pageOffset, 0]} >
            <group position={[0, profilePos, 0]} >
                <Text
                    position={[0, width < 4.5 ? 0.2 : 0, 0]}
                    {...headlineFontProps}>
                    {"{ PROFILE }"}
                </Text >

                <Text
                    {...contentFontProps}
                    textAlign='justify'
                    position={[0, - 0.51, 0]}
                >
                    Hi, I'm Ahmed Abdin, a Software Developer based in Bahrain.
                    I'm always inspired by the great websites, apps and analysis from all over the world.
                    My current goal is to win an award for my work.
                </Text >
            </group>

            <group position={[0, canDoPos, 0]}>
                <Text {...headlineFontProps} letterSpacing={-0.01}>
                    {"{ WHAT I CAN DO  }"}
                </Text >

                <Text
                    {...contentFontProps}
                    position={[0, - 0.65, 0]}
                >
                    - Websites{'\n'}
                    - 3D Websites{'\n'}
                    - Applications{'\n'}
                    - Augmented Reality Applications{'\n'}
                    - Machine Learning Models{'\n'}
                    - Computer Version Projects{'\n'}
                </Text >
            </group>

            <group position={[0, skillPos, 0]}>
                <Text {...headlineFontProps} letterSpacing={-0.01}>
                    {"{ SKILLS  }"}
                </Text >

                <Text
                    {...contentFontProps}
                    position={[0, - 0.6, 0]}
                >
                    - HTML, CSS, PHP{'\n'}
                    - React{'\n'}
                    - Three.js, React three fiber{'\n'}
                    - Kotlin (Android){'\n'}
                    - Python (numpy, pandas, Tensorflow API){'\n'}
                </Text >
            </group>

            <Divider y={- height - dividerPos} />
        </group>

    </>
};
