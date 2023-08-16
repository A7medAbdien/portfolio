import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

import { HeadlineFontProps } from '../../Utils/fontProps'
import { HoverableFrame, HoverableTextFrame, LogoFrame } from '../../Utils/Frames'
import openLink from '../../Utils/openLink'
import calcMaxWidth from '../../Utils/calcMaxWidth'


const logos = [
    {
        position: [-1.2, 0, 0],
        imgUrl: '/imgs/github.png',
        link: "https://github.com/A7medAbdien"
    },
    {
        position: [0, 0, 0],
        imgUrl: '/imgs/linkedin.png',
        link: "https://www.linkedin.com/in/ahmed-abdin-90a957187/"
    },
    {
        position: [1.2, 0, 0],
        imgUrl: '/imgs/whatsapp.png',
        link: "https://wa.me/97334533638?text=Hi%20Ahmed..."
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
                {logos.map(({ position, imgUrl, link }, i) =>
                    <HoverableFrame alwaysActive key={i} position={position}>
                        <planeGeometry args={[1, 1]} />
                        <LogoFrame
                            url={imgUrl}
                            scale={0.7}
                            onClick={() => openLink(link)}
                        />
                    </HoverableFrame>)
                }
            </group>

            <HoverableTextFrame alwaysActive width={5} height={2} position={[0, -height / 2, 0]}>
                <Text {...HeadlineFontProps}
                    fontSize={0.15}
                    onClick={() => openLink("/pdfs/CV.pdf")}
                >
                    {" >  My  CV  < "}
                </Text >
            </HoverableTextFrame>


            <Text {...HeadlineFontProps}
                position={[0, -height / 1.4, 0]}
            >
                {"{ { END } }"}
            </Text >

        </group>
    </>
}

export default ContactPage