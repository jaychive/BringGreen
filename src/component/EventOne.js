import React from 'react';
import EventTitle from './reusable/EventTitle';

function EventOne(props) {
  return (
    <section id='event1'>
      <EventTitle type={props.sort}></EventTitle>
    </section>
  );
}

export default EventOne;