import * as React from 'react'
import cn from 'classnames'


interface IPaginatorProps {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    setPage: (page: string) => {}
}

const Paginator: React.FC<IPaginatorProps> = ({
                     totalItemsCount = 40,
                     pageSize = 5,
                     currentPage,
                     // onPageChanged ,
                     portionSize = 3,
                     setPage
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
                                onClick={() => {
                                    setPage(String(p))
                                }}
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
    )
}

export default Paginator;




    




