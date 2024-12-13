import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { channels } from './data';

export function ChannelLogos() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="channel-logos-swiper"
        >
          {channels.map((channel) => (
            <SwiperSlide key={channel.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-3 flex items-center justify-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 w-full h-12 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}