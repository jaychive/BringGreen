import React from 'react';
import Title from './reusable/Title';

function Plus(props) {
  return (
    <section id='plus' className='sectionSpace'>
      <Title type={props.sort}></Title>
    </section>
  );
}

export default Plus;