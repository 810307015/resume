import React from 'react';

import './index.less';

export default function EducationBackground(props) {

    return (
        <div className="EducationBackground">
            <div className="region-title">{ props.title }</div>
            <div className="flex-box">
                {
                    props.list.map((item) => {

                        return (
                            <div className="flex-item" key={item.label}>
                                <div className="label">{item.label}</div>
                                <div className="value">{item.value}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}