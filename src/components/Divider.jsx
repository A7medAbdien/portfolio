import { Line } from "@react-three/drei"

export default function Divider({ y }) {
    const points = [
        [-0.3, 0, 0],
        [0.3, 0, 0],
    ]
    return <>
        <Line position={[0, y, 0]} points={points} color={'#fff'} lineWidth={2} />
    </>
};
