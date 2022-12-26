import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from './component/Hd';
import Main from './component/Main';
import New from './component/New';
import Brand from './component/Brand';
import Review from './component/Review';
import Plus from './component/Plus';
import EventOne from './component/EventOne';
import EventTwo from './component/EventTwo';
import { Products } from './component/Products';



function App() {
  return (
    <div className="App">
      <Header></Header>
        <Main sort="mainDB"></Main>
        <New sort="newDB"></New>
        <Brand sort="brandDB"></Brand>
        <Review sort="reviewDB"></Review>
        <Plus sort="plusDB"></Plus>
        <EventOne sort="event1DB"></EventOne>
        <EventTwo sort="event2DB"></EventTwo>
        <Products sort="productsDB"></Products>
      <Footer></Footer>
    </div>
  );
}

const Footer = () =>{
  return(
    <footer className="py-5 border-top">
      <ul className="d-flex justify-content-center">
        <li><a href="">git</a></li>
        <li><a href="">instagram</a></li>
        <li><a href="">notion</a></li>
      </ul>
    </footer>
  )
}

export default App;
