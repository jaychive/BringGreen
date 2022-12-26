import React from 'react';
import propsDB from '../../json/propsDB.json';

function Btn(props) {
  return (
    <div>
      <div className='mt-5 pt-5 d-flex justify-content-center'>
        <a href={propsDB[props.type].btnLink} target={propsDB[props.type].btnTarget} rel="noopener noreferrer" className={`border border-${propsDB[props.type].btnColor} rounded-pill py-3 px-4 text-decoration-none text-${propsDB[props.type].btnColor} d-block`}>{propsDB[props.type].btnContent}</a>
      </div>
    </div>
  );
}

export default Btn;