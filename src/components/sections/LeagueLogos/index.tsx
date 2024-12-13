import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { leagues } from './data';

export function LeagueLogos() {
  return (
    <section className="py-4 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={3}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 24 },
            1024: { slidesPerView: 6, spaceBetween: 24 },
          }}
          className="league-logos-swiper"
        >
          {leagues.map((league) => (
            <SwiperSlide key={league.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-3 flex items-center justify-center"
              >
                <img
                  src={league.logo}
                  alt={league.name}
                  className="h-12 w-auto object-contain transition-opacity hover:opacity-100"
                  loading="lazy"
                  style={{
                    filter: 'brightness(1.8) contrast(1.2)',
                    opacity: 0.8
                  }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}