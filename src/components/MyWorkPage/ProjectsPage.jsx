import { Text } from '@react-three/drei'
import { extend, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRoute, useLocation } from 'wouter'


import calcMaxWidth from '../../Utils/calcMaxWidth'
import { ContentFontProps, HeadlineFontProps } from '../../Utils/fontProps'
import InnerClouds from './InnerClouds'
import { Frame, Rig } from './PortalComponents'
import { enableScroll } from '../../Utils/controlScroll'
import InnerCard from './InnerCard'


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

