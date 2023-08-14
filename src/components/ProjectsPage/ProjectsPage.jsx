import { Text } from '@react-three/drei'
import { extend, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRoute, useLocation } from 'wouter'


import calcMaxWidth from '../../Utils/calcMaxWidth'
import { ContentFontProps, HeadlineFontProps } from '../../Utils/fontProps'
import InnerClouds from './InnerClouds'
import { Portal, Rig } from './PortalComponents'
import { enableScroll } from '../../Utils/controlScroll'
import InnerCard from './InnerCard'

const portalContents = [
    {
        id: '01',
        name: 'ArtMixer',
        description: 'A 3D website, that mixes two images using Neural Style Transfer (NST) technique.',
        img: '/imgs/artMixerImg.png',
        bg: 'red'
    },
    {
        id: '02',
        name: 'SafeDistance',
        description: 'During COVID-19, Measure the safe distance (2 meters) using the camera phone.',
        vid: '/vids/safeDistanceVid.mp4',
        bg: 'green'
    },
    {
        id: '03',
        name: 'ToxicTweets',
        description: 'Machine learning model that classify positive and negative (toxic) Twitter tweets.',
        img: '/imgs/toxicTweetsImg.png',
        bg: 'blue'
    },
]

export default function ProjectsPage({ pageOffset }) {

    const { viewport, camera } = useThree()
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

    const [, params] = useRoute('/:id')

    const frameProps = {
        width: calcMaxWidth(width),
        height: height / 6,
    }

    return <>
        <group position={[0, pageOffset, 0]} >
            {/* <Box position={[0, 0, 0]} /> */}

            <group name='RigContainer'>
                <group position={[0, titlePos, 0]} >
                    <Text
                        {...HeadlineFontProps}>
                        {"{ MY  WORK }"}
                    </Text >
                </group>


                {portalContents.map(({ id, name, description, img, vid, bg }, i) =>
                    <Portal key={id} {...frameProps} id={id} name={name} position={[0, -i * (height / 3), 0]} >
                        <InnerClouds count={1} />
                        <ambientLight color={bg} intensity={0.8} />
                        <InnerCard id={id} title={name} img={img} vid={vid} description={description} />
                    </Portal>
                )}
            </group>

            <Rig />
        </group>
    </>
}

