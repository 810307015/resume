import React from "react";
import ReactDOM from "react-dom";

import { 
  baseInfo, 
  education_module,
  skill_module,
  job_module,
  evaluation_module
} from './mock/data.js';

import './index.less';

const lazyLoader = (callback) => {

  return (props) => {
    const Comp = React.lazy(callback);
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Comp {...props} />
      </React.Suspense>
    )
  }
}

const BaseInfo = lazyLoader(() => import('Components/baseInfo/index.jsx'));
const EducationBackground = lazyLoader(() => import('Components/educationBackground/index.jsx'));
const Skill = lazyLoader(() => import('Components/skill/index.jsx'));
const Job = lazyLoader(() => import('Components/job/index.jsx'));
const SelfEvaluation = lazyLoader(() => import('Components/selfEvaluation/index.jsx'));

function render() {
  ReactDOM.render(
    <div className="container">
      <BaseInfo { ...baseInfo } />
      <EducationBackground { ...education_module } />
      <Skill { ...skill_module } />
      <Job { ...job_module } />
      <SelfEvaluation { ...evaluation_module } />
    </div>,
    document.getElementById("root")
  );
}

render();