import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRoute } from 'wouter'

import calcMaxWidth from '../../../Utils/calcMaxWidth'
import { HeadlineFontProps } from '../../../Utils/fontProps'
import InnerClouds from './InnerClouds'
import { Portal, Rig } from './PortalComponents'
import InnerCard from './InnerCard'
import Divider from '../../Divider'

const portalContents = [
    {
        id: '01',
        name: 'ArtMixer',
        description: 'A 3D website, that mixes two images using Neural Style Transfer (NST) technique.',
        img: '/imgs/artMixerImg.png',
        link: 'https://github.com/A7medAbdien/ArtMixer',
        bg: 'red'
    },
    {
        id: '02',
        name: 'SafeDistance',
        description: 'During COVID-19, Measure the safe distance (2 meters) using the camera phone.',
        vid: '/vids/safeDistanceVid.mp4',
        link: 'https://github.com/A7medAbdien/safeDistanceProject',
        bg: 'green'
    },
    {
        id: '03',
        name: 'ToxicTweets',
        description: 'Machine learning model that classify positive and negative (toxic) Twitter tweets.',
        img: '/imgs/toxicTweetsImg.png',
        link: 'https://colab.research.google.com/drive/1L472f5lxBHfFAmlTO7JCpvag9YFuxiwb?usp=sharing',
        bg: 'blue'
    },
]

export default function ProjectsPage({ pageOffset }) {

    const { viewport } = useThree()
    const { width, height } = viewport
    const { titlePos, dividerPos } = useControls("My Work Page", {
        titlePos: {
            value: 1.2,
            step: 0.01,
        },
        dividerPos: {
            value: 0,
            step: 0.01,
        },
    })

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

                {portalContents.map(({ id, name, description, img, vid, link, bg }, i) =>
                    <Portal key={id} {...frameProps} id={id} name={name} position={[0, -i * (height / 3), 0]} >
                        <InnerClouds count={1} />
                        <ambientLight color={bg} intensity={0.8} />
                        <InnerCard id={id} title={name} img={img} vid={vid} link={link} description={description} hoveredColor={bg} />
                    </Portal>
                )}
            </group>

            <Rig />

            <Divider y={-(portalContents.length - 0.25) * (height / 3) - dividerPos} />
        </group>
    </>
}

