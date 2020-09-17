import * as React from 'react'

const Sorting: React.FC  = () => {
    return (
        <div>
            <select name="sel" id="sel">
                <option value="12">По возрастанию рейтинга</option>
                <option value="13">По убыванию рейтинга</option>
            </select>
        </div>
    );
}

export default Sorting;