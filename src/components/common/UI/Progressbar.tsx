import * as React from 'react'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";

interface IProgressbarProps {
    vote: number,
}



const Progressbar: React.FC<IProgressbarProps>  = ({vote}) => {
    const percentage = vote * 10;
    const color = percentage > 70 ? "#21D07A" : "#D0D331";
    return (
        <div
            style={{ width: "85px" }}
            className="progressbar"
        >
            <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            background
            backgroundPadding={10}
            styles={buildStyles({
                backgroundColor: "#081c24",
                textColor: "#fff",
                pathColor: color,
                trailColor: "transparent",
                textSize: '20px'
            })}
        />
        </div>
    );
}

export default Progressbar;