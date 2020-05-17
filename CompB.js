import React from 'react';
import CompC from './CompC';

const CompB = (props) => {
    return (<div>
        <CompC
            {...props}

        />

    </div>);
}
export default CompB;