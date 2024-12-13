import { motion } from 'framer-motion';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const channelCategories = [
  {
    name: 'Sports',
    description: 'Live sports events from around the world',
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    channels: ['ESPN', 'Sky Sports', 'BeIN Sports', 'Fox Sports'],
  },
  {
    name: 'Movies',
    description: 'Latest blockbusters and classics',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    channels: ['HBO', 'Netflix', 'Disney+', 'Prime'],
  },
  {
    name: 'Entertainment',
    description: 'Popular shows and series',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    channels: ['ABC', 'NBC', 'CBS', 'FOX'],
  },
];

export function Channels() {
  return (
    <section id="channels" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Extensive Channel Collection
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access premium content from major networks and streaming platforms worldwide
          </p>
        </motion.div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {channelCategories.map((category) => (
            <SwiperSlide key={category.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl overflow-hidden"
              >
                <div className="aspect-video relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-sm text-gray-300">{category.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {category.channels.map((channel) => (
                      <span
                        key={channel}
                        className="px-2 py-1 text-xs font-medium text-purple-400 bg-purple-400/10 rounded-full"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}