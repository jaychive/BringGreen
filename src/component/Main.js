import React from 'react';
import Btn from './reusable/Btn';

function Main(props) {
  return (
    <section id='main'>
      <div className='mainImg'>
        <div className='mainContent h-100'>
          <div className='imgBox'>
            <img src="/img/seo/logo-black.png" className="img-fluid w-100" alt="logo" />
          </div>
          <p>Tea Tree Soothing Lotion Bar PLUS+</p>
          <strong>Release Event</strong>
          <p>11.11(Fri)-11.20(Sun)</p>
          <Btn type={props.sort}></Btn>
        </div>
      </div>
    </section>
  );
}

export default Main;