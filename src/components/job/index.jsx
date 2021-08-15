import React from 'react';

import './index.less';

export default function Job(props) {

    return (
        <div className="Job">
            <div className="region-title">{ props.title }</div>
            <div className="job-list">
                {
                    props.list.map((item) => {

                        return (
                            <div className="job-list-item" key={item.companyName}>
                                <div className="flex-box nowrap">
                                    <div className="flex-item">{ item.times }</div>
                                    <div className="flex-item">{ item.companyName }</div>
                                    <div className="flex-item">{ item.jobName }</div>
                                </div>
                                <div className="subtitle">{item.subtitle}</div>
                                <div className="common-list">
                                    {
                                        item.contentList.map((content, index) => {

                                            return (
                                                <div className="common-list-item" key={`job-content-${item.companyName}-${index}`}>
                                                    { index + 1 }. { content }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}