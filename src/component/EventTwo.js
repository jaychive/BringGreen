import React from 'react';
import EventTitle from './reusable/EventTitle';

function EventTwo(props) {
  return (
    <section id='event2'>
      <EventTitle type={props.sort}></EventTitle>
    </section>
  );
}

export default EventTwo;