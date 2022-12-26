import React from 'react';
import Btn from './reusable/Btn';

function Brand(props) {
  return (
    <section id='brand'>
      <div className='youtubeDiv position-relative'>
      <iframe className='position-absolute w-100 h-100' width="560" height="315" src="https://www.youtube.com/embed/IwbVhqWaAFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <Btn className="position-absolute" type={props.sort}></Btn>
    </section>
  );
}

export default Brand;