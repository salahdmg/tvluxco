import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { MovieCard } from './MovieCard';
import { movies } from './data';

export function MoviesAndSeries() {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Latest <span className="text-blue-500">Movies & Series</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Stream unlimited movies and series from top providers
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="!px-0"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.title} className="flex justify-center">
                <MovieCard {...movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}