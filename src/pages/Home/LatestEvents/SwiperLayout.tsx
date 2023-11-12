import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from 'src/components/Card';
import { events } from './data';

const SwiperLayout = () => {
  return (
    <div className="lg:hidden">
      <Swiper
        centeredSlides={true}
        initialSlide={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1.3 },
          480: { slidesPerView: 1.8 },
          640: { slidesPerView: 2.5 },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.title}>
            <Card
              variant="vertical"
              data={event}
              verticalClass="w-full h-[fit-content]"
              verticalImgClass="max-h-[200px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperLayout;
