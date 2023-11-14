import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import Divider from '../Divider'
import calcMaxWidth from '../../Utils/calcMaxWidth'
import { HeadlineFontProps, ContentFontProps } from '../../Utils/fontProps'
import { skills, summary, whatICanDo } from '../../../data'

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
            value: -3.85,
            step: 0.01,
        },
        dividerPos: {
            value: 0.5,
            step: 0.01,
        },
    })

    const contentFontProps = {
        ...ContentFontProps(width),
    }

    return <>
        <group position={[0, pageOffset, 0]} >
            <group position={[0, profilePos, 0]} >
                <Text
                    position={[0, width < 4.5 ? 0.2 : 0, 0]}
                    {...HeadlineFontProps}>
                    {"{ PROFILE }"}
                </Text >

                <Text
                    {...contentFontProps}
                    textAlign='justify'
                    position={[0, - 0.59, 0]}
                >
                    {summary}
                </Text >
            </group>

            <group position={[0, canDoPos, 0]}>
                <Text {...HeadlineFontProps} letterSpacing={-0.01}>
                    {"{ WHAT I CAN DO  }"}
                </Text >

                <Text
                    {...contentFontProps}
                    position={[0, - 0.7, 0]}
                >
                    {whatICanDo}
                </Text >
            </group>

            <group position={[0, skillPos, 0]}>
                <Text {...HeadlineFontProps} letterSpacing={-0.01}>
                    {"{ SKILLS  }"}
                </Text >

                <Text
                    {...contentFontProps}
                    position={[0, - 0.7, 0]}
                >
                    {skills}
                </Text >
            </group>

            <Divider y={- height - dividerPos} />
        </group>

    </>
};
