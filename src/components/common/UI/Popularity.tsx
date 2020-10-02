import * as React from 'react'

interface IPopularityProps {
    value: number
}

const Popularity: React.FC<IPopularityProps> = ({value}) => {
    return (
        <div className="popularity__wrap">
            <div className="popularity__outer">
                <div
                    style={{width: `${value}px`}}
                >
                </div>
            </div>
        </div>
    )
}

export default Popularity