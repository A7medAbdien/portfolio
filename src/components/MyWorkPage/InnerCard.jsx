import { Text } from '@react-three/drei'
import { extend, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { easing, geometry } from 'maath'
import { useRoute, useLocation } from 'wouter'


import { ContentFontProps, HeadlineFontProps } from '../../Utils/fontProps'
import { enableScroll } from '../../Utils/controlScroll'

extend(geometry)


const InnerCard = () => {
    const { innerTitlePos, innerImagePos, innerContentPos, backButtonPos } = useControls("My Work Inner", {
        backButtonPos: {
            value: 1.1,
            step: 0.01,
        },
        innerTitlePos: {
            value: 0.9,
            step: 0.01,
        },
        innerImagePos: {
            value: -0.25,
            step: 0.01,
        },
        innerContentPos: {
            value: -1.5,
            step: 0.01,
        },
        projectsPageDividerPos: {
            value: 0.5,
            step: 0.01,
        },
    })

    const { viewport } = useThree()
    const { width } = viewport

    const [, params] = useRoute('/:id')
    const isActive = params?.id
    const [, setLocation] = useLocation()



    return <group position={[0, 0, 0]} >
        <Text
            {...HeadlineFontProps}
            position={[0, backButtonPos, 0]}
            fontSize={0.09}
            color={'#000'}
            onClick={() => (setLocation('/'), enableScroll())}
        >
            {"{ BACK }"}
        </Text >
        <Text
            {...HeadlineFontProps}
            position={[0, innerTitlePos, 0]}
            color={'#000'}
        >
            {"PROFILE"}
        </Text >

        <mesh position={[0, innerImagePos, 0]}>
            <meshBasicMaterial />
            <roundedPlaneGeometry args={[1, 1]} />
        </mesh>

        <Text
            {...ContentFontProps(width)}
            textAlign='justify'
            position={[0, innerContentPos, 0]}
            color={'#000'}
        >
            Hi, I'm Ahmed Abdin, a Software Developer based in Bahrain.
            I'm always inspired by the great websites, apps and analysis from all over the world.
            My current goal is to win an award for my work.
        </Text >
    </group>
}

export default InnerCard