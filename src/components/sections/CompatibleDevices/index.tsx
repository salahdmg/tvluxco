import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { devices, applications } from './data';

export function CompatibleDevices() {
  return (
    <section className="py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] rounded-3xl p-8 sm:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compatible with{' '}
              <span className="text-blue-500">All Devices</span> and{' '}
              <span className="text-blue-500">Applications</span>
            </h2>
            <p className="text-gray-400">
              Easily access your favorite content on all your devices and applications 
              thanks to extensive compatibility.
            </p>
          </motion.div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-6">
                Compatible Devices
              </h3>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={4}
                loop={true}
                speed={3000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: { slidesPerView: 6 },
                  768: { slidesPerView: 8 },
                  1024: { slidesPerView: 9 },
                }}
                className="compatible-devices-swiper"
              >
                {devices.map((device) => (
                  <SwiperSlide key={device.name}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="aspect-square bg-[#1A1A1A] rounded-xl p-3 flex items-center justify-center group hover:bg-[#222222] transition-colors"
                    >
                      <img
                        src={device.icon}
                        alt={device.name}
                        className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-6">
                Compatible Applications
              </h3>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={4}
                loop={true}
                speed={3000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                breakpoints={{
                  640: { slidesPerView: 6 },
                  768: { slidesPerView: 8 },
                }}
                className="compatible-devices-swiper"
              >
                {applications.map((app) => (
                  <SwiperSlide key={app.name}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="aspect-square bg-[#1A1A1A] rounded-xl p-3 flex items-center justify-center group hover:bg-[#222222] transition-colors"
                    >
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}