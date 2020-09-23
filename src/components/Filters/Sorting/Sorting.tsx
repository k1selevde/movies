import * as React from 'react'
import {OptionType} from "../../../types/types";

interface ISortingProps {
    options: OptionType[]
}

const Sorting: React.FC<ISortingProps>  = ({options=[]}) => {
    return (
        <div>
            <select name="sel" id="sel">
                {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default Sorting;