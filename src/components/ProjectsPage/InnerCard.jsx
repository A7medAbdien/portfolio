import { OrbitControls, Text } from '@react-three/drei'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { easing, geometry } from 'maath'
import { useRoute, useLocation } from 'wouter'


import { ContentFontProps, HeadlineFontProps } from '../../Utils/fontProps'
import { enableScroll } from '../../Utils/controlScroll'
import { useRef } from 'react'
import { ImageFrame, VideoFrame } from '../../Utils/Frames'
import calcMaxWidth from '../../Utils/calcMaxWidth'

extend(geometry)


const InnerCard = ({ id, title, img, vid, description, ...props }) => {
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
        }
    })

    const { viewport } = useThree()
    const { width, height } = viewport

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

    const headlineFontProps = { ...HeadlineFontProps, color: '#000' }

    return <>
        {isActive && <group  {...props} position={[0, 0.4, 0]} >
            <Text
                ref={backButton}
                {...headlineFontProps}
                position={[0, backButtonPos + 5, 0]}
                fontSize={0.1}
                onClick={() => (setLocation('/'), enableScroll())}
            >
                {"BACK"}
            </Text >

            <Text
                ref={innerTitle}
                {...headlineFontProps}
                position={[0, innerTitlePos + 5, 0]}
            >
                {`{ ${title} }`}
            </Text >

            {img &&
                <mesh
                    ref={innerImage}
                    position={[0, innerImagePos, -20]}
                    onClick={() => console.log("hi")}
                >
                    <ImageFrame url={img} transparent opacity={0.8} />
                    <roundedPlaneGeometry args={[calcMaxWidth(width) - 0.2, (height / 2.5) - 0.2]} />
                </mesh>
            }

            {vid &&
                <mesh
                    ref={innerImage}
                    position={[0, innerImagePos, -20]}
                    onClick={() => console.log("hi")}
                >
                    <VideoFrame url={vid} />
                    <roundedPlaneGeometry args={[calcMaxWidth(width / 2) - 0.2, (height / 2.5)]} />
                </mesh>
            }

            <Text
                ref={innerContent}
                {...ContentFontProps(width)}
                textAlign='justify'
                position={[0, innerContentPos - 5, 0]}
                color={'#000'}
            >
                {description}
            </Text >
        </group>}
    </>
}

export default InnerCard