import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const channels = [
  {
    name: 'Viaplay',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Viaplay_logo.svg'
  },
  {
    name: 'TV6',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/TV6_logo_2020.svg'
  },
  {
    name: 'Prime Video',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.svg'
  },
  {
    name: 'Apple TV+',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg'
  },
  {
    name: 'MBC Group',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Mbc1logo.png'
  },
  {
    name: 'Fox',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Fox_Broadcasting_Company_logo_%282019%29.svg'
  },
  {
    name: 'BBC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg'
  },
  {
    name: 'CNBC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg'
  },
  {
    name: 'Discovery Channel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/2019_Discovery_logo.svg'
  }
];

export function Channels() {
  return (
    <section className="py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
          className="channel-logos-swiper"
        >
          {channels.map((channel) => (
            <SwiperSlide key={channel.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-4 h-20 flex items-center justify-center"
              >
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}