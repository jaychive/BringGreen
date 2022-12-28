import React from 'react';
import Title from './reusable/Title';

function New(props) {
  return (
    <section id='new' className='sectionSpace'>
      <Title type={props.sort}></Title>
    </section>
  );
}

export default New;