import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ReviewCard } from './ReviewCard';
import { reviews } from './data';

export function ClientReviews() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center gap-1 mb-3">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-green-500 text-green-500" />
            ))}
          </div>
          <p className="text-sm text-gray-400 mb-6">4.6 out of 5 based on +120 reviews.</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Valued Customers' Reviews
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what our customers say about our service quality and support.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}