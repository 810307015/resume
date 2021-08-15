import React from 'react';

import './index.less';

export default function Skill(props) {

    return (
        <div className="Skill">
            <div className="region-title">{ props.title }</div>
            <ul className="common-list">
                {
                    props.list.map((item, index) => {

                        return (
                            <li className="common-list-item" key={`skill-${index}`}>
                                {index + 1}. { item }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}