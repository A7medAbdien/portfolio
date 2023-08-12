import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import Divider from './Divider'

export default function ProfilePage({ }) {

    const { viewport } = useThree()
    const { width, height } = viewport
    const pagePadding = - (height / 2)
    const { dividerPos, profilePos, canDoPos, skillPos } = useControls({
        profilePos: {
            value: 0.81,
            step: 0.01,
        },
        canDoPos: {
            value: 2.42,
            step: 0.01,
        },
        skillPos: {
            value: 4.18,
            step: 0.01,
        },
        dividerPos: {
            value: 1.66,
            step: 0.01,
        },
    })

    const headlineFontProps = {
        font: 'fonts/SaolDisplay-Regular.woff',
        fontSize: 0.1,
        letterSpacing: -0.05,
        lineHeight: 1,
        'material-toneMapped': false
    }
    const contentFontProps = {
        fontSize: 0.1,
        lineHeight: 1.2,
        maxWidth: width / 2 < 1.5 ? 1.5 : width / 2,
        textAlign: 'left',
        'material-toneMapped': false
    }

    return <>
        <group position={[0, pagePadding - profilePos, 0]} >
            <Text {...headlineFontProps}>
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

        <group position={[0, pagePadding - canDoPos, 0]}>
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

        <group position={[0, pagePadding - skillPos, 0]}>
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

        <Divider y={(-1.5 * height) - dividerPos} />

    </>
};
