import React from 'react';

import './index.less';

export default function BaseInfo(props) {

    return (
        <div className="BaseInfo">
            <h3>{ props.name }</h3>
            <div className="flex-box">
                {
                    props.list.map((item) => {

                        return (
                            <div className="flex-item" key={item.label}>
                                <div className="label">{ item.label }</div>
                                {
                                    item.link 
                                    ? <div className="value">
                                        <a href={item.value} target="_blank">{ item.value }</a>
                                    </div>
                                    : <div className="value">{ item.value }</div>
                                }
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}