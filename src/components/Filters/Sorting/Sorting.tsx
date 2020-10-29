import * as React from 'react'
import {OptionType} from "../../../types/types";

interface ISortingProps {
    options: OptionType[],
    setCurrentSortOption: (option: string) => {}
}

const Sorting: React.FC<ISortingProps>  = ({options= [], setCurrentSortOption}) => {
    let selectRef = React.useRef(null)
    return (
        <div>
            <select
                ref={selectRef}
                name="sel"
                id="sel"
                onChange={() => {
                    setCurrentSortOption(selectRef.current.value)
                }}
            >
                {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default Sorting;