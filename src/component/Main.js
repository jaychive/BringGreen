import React from 'react';
import Btn from './reusable/Btn';

function Main(props) {
  return (
    <section>
      
      <Btn type={props.sort}></Btn>
    </section>
  );
}

export default Main;