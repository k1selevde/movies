import * as React from 'react'

type IDProps = {
    height: string
    id: string
}

const FacebookID: React.FC<IDProps>  = ({height}) => {
    return (
        <svg height={height} width="20px" viewBox="0 0 512 512" className="svg__facebook">
            <path
                d="M452 0H60C26.916 0 0 26.916 0 60v392c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60V60c0-33.084-26.916-60-60-60zm20 452c0 11.028-8.972 20-20 20H338V309h61.79L410 247h-72v-43c0-16.975 13.025-30 30-30h41v-62h-41c-50.923 0-91.978 41.25-91.978 92.174V247H216v62h60.022v163H60c-11.028 0-20-8.972-20-20V60c0-11.028 8.972-20 20-20h392c11.028 0 20 8.972 20 20v392z"/>
        </svg>
    );
}

export default FacebookID;