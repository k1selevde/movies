import * as React from 'react';
import * as NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

const Progress: React.FC = () => {
    React.useEffect(() => {
        NProgress.start();
        return () => {
            NProgress.done();
        };
    }, []);
    return (
        <div>
            <div>
                Loading
            </div>
        </div>
    );
};

export default Progress;