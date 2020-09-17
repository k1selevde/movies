import * as React from 'react'
import cn from 'classnames'

const Paginator = ({
                     totalItemsCount = 40,
                     pageSize = 5,
                     currentPage = 1,
                     // onPageChanged ,
                     portionSize = 3,
                 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber,setPortionNumber] = React.useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div>
            {pages.map(i=> (<div>{i}</div>))}
            <div
                className="paginator"
            >
                {portionNumber > 1 &&
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}
                >
                    PREV
                </button>
                }
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return (
                            <span
                                className={
                                    cn(
                                        {
                                            "selectedPage": currentPage == p
                                        },
                                        "pageNumber"
                                    )}
                                key={p}
                            >
                            {p}
                        </span>
                        )
                    })}
                {portionNumber < portionCount &&
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                >
                    NEXT
                </button>
                }
            </div>
        </div>
    );
}

export default Paginator;




    




