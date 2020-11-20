import * as React from 'react'
import cn from 'classnames'
import {Genre} from "../../../Filters/Genres/Genres";


interface IPaginatorProps {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    setPage: (page: number) => {}
    sort: string,
    genres: Array<Genre>
}

const Paginator: React.FC<IPaginatorProps> = ({
                     totalItemsCount ,
                     pageSize ,
                     currentPage,
                     // onPageChanged ,
                     portionSize ,
                     setPage,
                     genres,
                     sort
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



    let currentPageIsOne = (currentPage == 1)
    React.useEffect(() => {
            setPortionNumber(1)
    },[genres,sort])

    return (
        <div>
            <div
                className="paginator"
            >
                <div className="sideArrow__wrap">
                    {portionNumber > 1 &&
                    <button
                        className="sideArrow sideArrow__left"
                        onClick={() => {
                            setPortionNumber(portionNumber - 1)
                        }}
                    >
                        PREV
                    </button>
                    }
                </div>
                {(pages.length > 1) && pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return (
                            <span
                                onClick={() => {
                                    setPage(Number(p))
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
                    })
                }
                <div className="sideArrow__wrap">
                    {portionNumber < portionCount &&
                        <button
                            className="sideArrow sideArrow__right"
                            onClick={() => {
                                setPortionNumber(portionNumber + 1)
                            }}
                        >
                            NEXT
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Paginator;




    




