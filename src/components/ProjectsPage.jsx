import { Text } from '@react-three/drei'
import { extend, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { easing, geometry } from 'maath'
import { useRoute, useLocation } from 'wouter'


import calcMaxWidth from '../Utils/calcMaxWidth'
import { ContentFontProps, HeadlineFontProps } from '../Utils/fontProps'
import InnerClouds from './InnerClouds'
import { Frame, Rig } from './PortalComponents'
import { enableScroll } from '../Utils/controlScroll'

extend(geometry)

export default function ProjectsPage({ pageOffset }) {

    const { viewport } = useThree()
    const { width, height } = viewport
    const { titlePos } = useControls("My Work Page", {
        titlePos: {
            value: 1.2,
            step: 0.01,
        },
        projectsPageDividerPos: {
            value: 0.5,
            step: 0.01,
        },
    })

    return <>
        <group position={[0, pageOffset, 0]} >
            {/* <Box position={[0, 0, 0]} /> */}

            <group position={[0, titlePos, 0]} >
                <Text
                    {...HeadlineFontProps}>
                    {"{ MY  WORK }"}
                </Text >
            </group>


            <Frame id="01" width={calcMaxWidth(width)} height={height / 6} name="ArtMixer"  >
                <InnerClouds count={1} />
                <ambientLight color="red" intensity={0.8} />
                <InnerCard />

            </Frame>

            <Frame id="02" width={calcMaxWidth(width)} height={height / 6} name="SafeDistance" position={[0, -height / 3, 0]}>
                <InnerClouds count={1} />
                <ambientLight color="green" intensity={0.8} />
            </Frame>

            <Frame id="03" width={calcMaxWidth(width)} height={height / 6} name="ToxicTweets" position={[0, -4 * height / 6, 0]}>
                <InnerClouds count={1} />
                <ambientLight color="blue" intensity={0.8} />
            </Frame>

            <Rig />
        </group>
    </>
}

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

    const [, params] = useRoute('/item/:id')
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
