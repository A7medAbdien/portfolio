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
import { HoverableFrame } from '../../../Utils/Frames'
import { portalContents } from '../../../../data'


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

                <Text {...HeadlineFontProps}
                    position={[0, titlePos, 0]}
                >

                    {"{ MY  WORK }"}
                </Text >

                {portalContents.map(({ id, name, description, img, vid, link, bg }, i) =>
                    <HoverableFrame key={id} position={[0, -i * (height / 3), 0]} alwaysActive>
                        <Portal {...frameProps} id={id} name={name} >
                            <InnerClouds count={1} />
                            <ambientLight color={bg} intensity={0.8} />
                            <InnerCard id={id} title={name} img={img} vid={vid} link={link} description={description} hoveredColor={bg} />
                        </Portal>
                    </HoverableFrame>
                )}
            </group>

            <Rig />

            <Divider y={-(portalContents.length - 0.25) * (height / 3) - dividerPos} />
        </group>
    </>
}

