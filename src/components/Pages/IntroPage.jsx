import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import ScrollArrow from '../ScrollArrow/ScrollArrow'
import Divider from '../Divider'
import calcMaxWidth from '../../Utils/calcMaxWidth'
import { logos } from '../../../data'
import { HoverableFrame, HoverableTextFrame, LogoFrame } from '../../Utils/Frames'
import { HeadlineFontProps } from '../../Utils/fontProps'
import openLink from '../../Utils/openLink'


export default function IntroPage({ showScroll }) {

    const { viewport } = useThree()
    const { width, height } = viewport
    const { introPageDividerPos, jopTitlePos, scrollPos, namePos, logosPos } = useControls({
        namePos: {
            value: { x: 0, y: 1 },
            joystick: 'invertY',
            step: 0.01,
        },
        jopTitlePos: {
            value: { x: 0, y: -1.25 },
            joystick: 'invertY',
            step: 0.01,
        },
        scrollPos: {
            value: { x: 0, y: (- height / 2) + 0.2 },
            joystick: 'invertY',
            step: 0.01,
        },
        introPageDividerPos: {
            value: { x: 0, y: - (height / 2) },
            joystick: 'invertY',
            step: 0.01,
        },
        logosPos: {
            value: { x: 0, y: 0 },
            joystick: 'invertY',
            step: 0.01,
        }
    })

    const fontProps = {
        font: 'fonts/SaolDisplay-Regular.woff',
        fontSize: 0.1,
        letterSpacing: 0,
        lineHeight: 1,
        'material-toneMapped': false
    }

    return <>
        <group scale={0.8}>

            {/* <group position={[namePos.x, namePos.y, 0]}>
                <Text
                    {...fontProps}
                    position={[0, 0.4, 0]}>
                    {"{ PORTFOLIO }"}
                </Text >

                <Text
                    {...fontProps}
                    letterSpacing={-0.05}
                    fontSize={0.4}>
                    AHMED.A
                </Text >
            </group> */}

            <group position={[jopTitlePos.x, jopTitlePos.y, 0]}>
                <Text
                    {...fontProps}
                    fontSize={0.15}>
                    SOFTWARE  DEVELOPER
                </Text >

                <group scale={calcMaxWidth(width) / 3 > 0.25 ? 0.25 : calcMaxWidth(width) / 3} position={[0, 0 - 0.35, 0]}>
                    {logos.map(({ position, imgUrl, link }, i) =>
                        <HoverableFrame onClick={() => openLink(link)} alwaysActive changeColor key={i} position={position}>
                            <planeGeometry args={[1, 1]} />
                            <LogoFrame
                                url={imgUrl}
                                scale={0.25}
                            />
                        </HoverableFrame>)
                    }
                </group>

                <HoverableTextFrame alwaysActive width={5} height={2} position={[0, 0 - 0.7, 0]}>
                    <Text {...HeadlineFontProps}
                        fontSize={0.15}
                        onClick={() => openLink("/pdfs/CV.pdf")}
                    >
                        {" >  My  CV  < "}
                    </Text >
                </HoverableTextFrame>
            </group>

            {showScroll && <ScrollArrow x={scrollPos.x} y={scrollPos.y} />}

            <Divider y={introPageDividerPos.y} />
        </group>
    </>
}