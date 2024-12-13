import { motion } from 'framer-motion';

interface ChannelCardProps {
  name: string;
  description: string;
  image: string;
  channels: string[];
}

export function ChannelCard({ name, description, image, channels }: ChannelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl overflow-hidden"
    >
      <div className="aspect-video relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {channels.map((channel) => (
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
  );
}