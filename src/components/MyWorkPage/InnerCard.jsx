import { OrbitControls, Text } from '@react-three/drei'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { easing, geometry } from 'maath'
import { useRoute, useLocation } from 'wouter'


import { ContentFontProps, HeadlineFontProps } from '../../Utils/fontProps'
import { enableScroll } from '../../Utils/controlScroll'
import { useRef } from 'react'

extend(geometry)


const InnerCard = ({ id, ...props }) => {
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
    const isActive = params?.id === id
    const [, setLocation] = useLocation()

    const backButton = useRef()
    const innerTitle = useRef()
    const innerImage = useRef()
    const innerContent = useRef()
    const smoothTime = 0.3

    useFrame((_, delta) => {
        if (isActive) {
            easing.damp3(backButton.current.position, [0, backButtonPos, 0], smoothTime, delta)
            easing.damp3(innerTitle.current.position, [0, innerTitlePos, 0], smoothTime, delta)
            easing.damp3(innerImage.current.position, [0, innerImagePos, 0], smoothTime, delta)
            easing.damp3(innerContent.current.position, [0, innerContentPos, 0], smoothTime, delta)
        }
    })


    return <>
        {isActive && <group  {...props} position={[0, 0.3, 0]} >
            <Text
                ref={backButton}
                {...HeadlineFontProps}
                position={[0, backButtonPos + 5, 0]}
                fontSize={0.09}
                color={'#000'}
                onClick={() => (setLocation('/'), enableScroll())}
            >
                {"BACK"}
            </Text >
            <Text
                ref={innerTitle}
                {...HeadlineFontProps}
                position={[0, innerTitlePos + 5, 0]}
                color={'#000'}
            >
                {"{ PROFILE }"}
            </Text >

            <mesh
                ref={innerImage}
                position={[0, innerImagePos, -20]}
            >
                <meshBasicMaterial />
                <roundedPlaneGeometry args={[1, 1]} />
            </mesh>

            <Text
                ref={innerContent}
                {...ContentFontProps(width)}
                textAlign='justify'
                position={[0, innerContentPos - 5, 0]}
                color={'#000'}
            >
                Hi, I'm Ahmed Abdin, a Software Developer based in Bahrain.
                I'm always inspired by the great websites, apps and analysis from all over the world.
                My current goal is to win an award for my work.
            </Text >
        </group>}
    </>
}

export default InnerCard