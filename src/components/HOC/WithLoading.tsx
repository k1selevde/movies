import * as React from 'react'

export function WithLoading<OPE>(WrappedComponent: React.ComponentType<OPE>) {
    return (props: OPE) => {
        return (
            <React.Suspense fallback={<div>Yo!</div>}>
                <WrappedComponent {...props} />
            </React.Suspense>
        )
    }
}