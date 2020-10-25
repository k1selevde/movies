import * as React from 'react'

interface IProgressbarProps {
    vote: number,
    max: number
}


const Progressbar: React.FC<IProgressbarProps>  = ({vote,max}) => {
    return (
        <div>Progress</div>
    );
}

export default Progressbar;