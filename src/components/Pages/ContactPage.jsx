import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

import { HeadlineFontProps } from '../../Utils/fontProps'
import { HoverableFrame, LogoFrame } from '../../Utils/Frames'
import openLink from '../../Utils/openLink'
import calcMaxWidth from '../../Utils/calcMaxWidth'


const logos = [
    {
        position: [-1.2, 0, 0],
        url: '/imgs/github.png',
        link: "https://github.com/A7medAbdien"
    },
    {
        position: [0, 0, 0],
        url: '/imgs/linkedin.png',
        link: "https://www.linkedin.com/in/ahmed-abdin-90a957187/"
    },
    {
        position: [1.2, 0, 0],
        url: '/imgs/whatsapp.png',
        link: "https://github.com/A7medAbdien"
    },
]

const ContactPage = ({ pageOffset = 0 }) => {

    const { viewport } = useThree()
    const { width, height } = viewport

    return <>
        <group position={[0, pageOffset, 0]}>

            <Text {...HeadlineFontProps}
                position={[0, -0.5, 0]}
            >
                {"{ CONTACT }"}
            </Text >


            <group scale={calcMaxWidth(width) / 3 > 0.7 ? 0.7 : calcMaxWidth(width) / 3} position={[0, -height / 2 + 1, 0]}>
                {logos.map(({ position, url, link }, i) =>
                    <HoverableFrame alwaysActive key={i} position={position}>
                        <planeGeometry args={[1, 1]} />
                        <LogoFrame
                            url={url}
                            scale={0.7}
                            onClick={() => openLink(link)}
                        />
                    </HoverableFrame>)
                }
            </group>

            <HoverableFrame alwaysActive position={[0, -height / 2, 0]}>
                <Text {...HeadlineFontProps}
                    fontSize={0.15}
                    onClick={() => openLink("/pdfs/CV.pdf")}
                >
                    {" >  My  CV  < "}
                </Text >
            </HoverableFrame>


            <Text {...HeadlineFontProps}
                position={[0, -height / 1.4, 0]}
            >
                {"{ { END } }"}
            </Text >

        </group>
    </>
}

export default ContactPage