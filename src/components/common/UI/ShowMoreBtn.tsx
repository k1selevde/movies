import * as React from 'react'

interface IShowMoreBtn {
    handler: () => void
}

const ShowMoreBtn: React.FC<IShowMoreBtn> = ({handler}) => {
    return (
        <button
            onClick={handler}
            className="showMoreBtn__wrap">
            <p className="showMoreBtn__text">Показать больше</p>
        </button>
    )
}

export default ShowMoreBtn