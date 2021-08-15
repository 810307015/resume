import React from 'react';

import './index.less';

export default function SelfEvaluation(props) {

    return (
        <div className="SelfEvaluation">
            <div className="region-title">{ props.title }</div>
            <div className="evaluation-content">
                { props.evaluationContent }
            </div>
        </div>
    )
}