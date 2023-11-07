import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@nextui-org/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { slugify } from '../../utilities/slugify';

function HomePageSlider({ data, fromCategory }) {

  const categoryFixer = (item) => {
    const { category } = item;
    if (/\bMen\b/.test(category)) {
      return 'men';
    }
    else if (category.includes('Women')) {
      return 'women';
    }
    else if (category.includes('Kids')) {
      return 'kids';
    }
  }

  return (
    <>

      {fromCategory === 'NewCollection' ? <h2>New Collection</h2> : <h2> Whats Hot?</h2>}
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          }
        }}


        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider-card">
              <div className="slider-image-content">
                <div className="slider-card-image">
                  <img src={item.imgSrc} alt={item.name} className="card-img" />
                </div>
              </div>
              <div className="slider-card-content">
                <h2 className="slider-name">{item.name}</h2>
                <p className="slider-description">{item.description}</p>
                <Link
                  to={`/${categoryFixer(item)}/${item.id}/${slugify(item.name)}`}
                >
                  <Button variant='flat' color='primary'>View More</Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}



export default HomePageSlider;
