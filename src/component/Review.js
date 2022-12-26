import React from 'react';
import Title from './reusable/Title';

function Review(props) {
  return (
    <section>
    <Title type={props.sort}></Title>
    </section>
  );
}

export default Review;