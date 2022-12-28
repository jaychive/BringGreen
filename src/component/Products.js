import swiperDBlink from '../json/swiperinof.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Title from './reusable/Title';
import Btn from './reusable/Btn';

const Products = (props) => {
  return (
    <section id='others' className='sectionSpace d-flex flex-column align-items-center'>
      <Title type={props.sort}></Title>
      <Worksswiper />
      <Btn type={props.sort}></Btn>
    </section>
  )
}

const Worksswiper = () => {
  const prodSwiper = swiperDBlink.products;
  return (
    <Swiper
      className='mySwiper'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={5}
      spaceBetween={20}
      slidesPerGroup={5}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      // onSlideChange={() => {
      //   //슬라이드가 끝나고 실행
      // }}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {
        prodSwiper.map((item, index) => {
          return (
            <SwiperSlide className={item.cls} key={'sw' + index}>
              <img src={item.prodImg} alt={item.prodName} className="d-block" />
              <h4>{item.prodName}</h4>
              <p>올리브영 할인가</p>
              <strong>{item.price}</strong>
            </SwiperSlide>
          )
        })
      }

    </Swiper>
  )
}

export default Products;