import React from 'react';
import Btn from './reusable/Btn';

function Brand(props) {
  return (
    <section id='brand'>
      <p className='text-center'>여기 밑에 버튼 있다</p>
      <Btn type={props.sort}></Btn>
    </section>
  );
}

export default Brand;