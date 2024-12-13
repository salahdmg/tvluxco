import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { DeviceCard } from './DeviceCard';
import type { Device } from './types';

interface DeviceSwiperProps {
  title: string;
  devices: Device[];
  reverseDirection?: boolean;
}

export function DeviceSwiper({ title, devices, reverseDirection }: DeviceSwiperProps) {
  return (
    <div className="bg-[#0A0A0A] rounded-2xl p-4 overflow-hidden">
      <h3 className="text-xl font-semibold text-white mb-4 px-2">{title}</h3>
      <div className="-mx-1 sm:mx-0">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={6}
          slidesPerView={4}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: reverseDirection || false,
          }}
          breakpoints={{
            640: { slidesPerView: 5, spaceBetween: 8 },
            768: { slidesPerView: 6, spaceBetween: 8 },
            1024: { slidesPerView: 8, spaceBetween: 8 },
          }}
          className="compatible-devices-swiper !overflow-hidden"
        >
          {devices.map((device) => (
            <SwiperSlide key={device.name}>
              <DeviceCard {...device} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}