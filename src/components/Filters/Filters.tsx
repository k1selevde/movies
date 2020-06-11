import * as React from 'react'

type FilterType = {
    name?: string
}

interface Props {
    filters?: Array<FilterType>
}

interface State {
}

class Filters extends React.Component<Props,State> {
    render() {
        return (
            <>
                <h4>Фильтры:</h4>
                <div>It's Filter Block</div>
            </>
        )
    }
}

export default Filters;