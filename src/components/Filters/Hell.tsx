import * as React from 'react'

type HellPropsType = {

}

type HellStateType = {
    readonly count: number //  not necessary
}


class Hell extends React.Component<HellPropsType,HellStateType> {
    state: HellStateType = {
        count: 2
    }

    render() {
        return (
            <div>erwer</div>
        )
    }
}