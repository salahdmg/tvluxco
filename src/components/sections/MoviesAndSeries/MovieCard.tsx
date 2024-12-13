import { motion } from 'framer-motion';

interface MovieCardProps {
  title: string;
  image: string;
  provider: string;
  releaseInfo: string;
}

export function MovieCard({ title, image, provider, releaseInfo }: MovieCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer w-[calc(50vw-16px)] sm:w-[260px] lg:w-[280px]"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary mb-2">
          {provider}
        </span>
        <h3 className="text-base font-bold text-white mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-300">{releaseInfo}</p>
      </div>
    </motion.div>
  );
}