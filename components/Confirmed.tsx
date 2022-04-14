import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import Confetti from "react-dom-confetti";
import 'react-circular-progressbar/dist/styles.css';

const confettiConfig = {
    angle: 90,
    spread: 100,
    startVelocity: 34,
    elementCount: 81,
    dragFriction: 0.11,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    colors: ["#009ACF", "#00A0D1", "#44ADFF", "#4076CD", "#6A99FF"]
};


export default function Confirmed() {
    const [percentage, setPercentage] = useState(0)
    const [done, setDone] = useState(false)

    useEffect(() => {
        const t1 = setTimeout(() => setPercentage(100), 100)
        const t2 = setTimeout(() => setDone(true), 600)

        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
        }
    }, [])

    return (
        <div style ={{ display: 'flex', justifyContent: "center" }}>
            <div style={{ height: '20rem', width: '20rem' }}>
                <CircularProgressbarWithChildren
                    value={percentage}
                    styles={buildStyles({
                        pathColor: '#00AB00'
                    })} 
            >
                <p style={{fontSize: 50}}>{done ? "✅" : ""}</p>
                <Confetti active={done} config={confettiConfig} />
                </CircularProgressbarWithChildren>
            </div>
        </div>        
    );
}