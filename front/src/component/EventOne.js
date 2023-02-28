import React from 'react';
import EventTitle from './reusable/EventTitle';

function EventOne(props) {
  return (
    <section id='event1' className='sectionSpace'>
      <div className='pb-5'>
        <EventTitle type={props.sort}></EventTitle>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img src={process.env.PUBLIC_URL + '/img/compImg/oliveyoung.jpg'} className='img-fluid' alt="oliveyoung" />
          </div>
          <div className="col-6 text-start ps-3 d-flex flex-column justify-content-between">
            {/* 멘트 고치기 */}
            <ul className="ps-0">
              <li className='pt-0'><span>1 .</span> 인증 가능 항목을 챙긴다.</li>
              <li><span>2 .</span> 올리브영 오프라인 매장으로 간다.</li>
              <li><span>3 .</span> 브링그린 제품을 구매한다.</li>
              <li><span>4 .</span> 캐셔에게 구매 인증을 하면 신제품이 내 손에!</li>
            </ul>
            <p className='d-block'>인증 가능한 항목: 브링그린 화장품 통, 구매 영수증(모바일 영수증), 올리브영 온라인몰 구매 내역</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventOne;