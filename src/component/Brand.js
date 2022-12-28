import React from 'react';
import Btn from './reusable/Btn';

function Brand(props) {
  return (
    <section id='brand'>
      <div className='sectionSpace h-100'>
        <div className='youtubeDiv position-relative'>
          <iframe className='position-absolute w-100 h-100' width="560" height="315" src="https://www.youtube.com/embed/IwbVhqWaAFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div className='sectionSpace p-0'>
        <div className='brandImg position-relative'>
          <div className='brandContent'>
            <h2 className="text-white display-4 mb-3">
              We BRING your GREEN
              <br />
              자연주의 브랜드
            </h2>
            <div className="logoImgBox">
              <img src="/img/seo/logo-white.png" className="img-fluid w-100" alt="logo" />
            </div>
            <p className="text-white mb-5 text-wrap"> 수분에 진심! 매일매일 피부에 자연을 골라담다.
              <br />수분이 부족한 피부에 대한 솔루션을 제공하는 수분 기능성 자연주의 브랜드 브링그린입니다.</p>
            <Btn className="" type={props.sort}></Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;