import { Star } from 'lucide-react';

interface ReviewCardProps {
  rating: number;
  content: string;
  author: string;
  location: string;
  image: string;
}

export function ReviewCard({ rating, content, author, location, image }: ReviewCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 h-full">
      <div className="aspect-video w-full">
        <img 
          src={image} 
          alt={`${author}'s review`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex gap-1 mb-3">
          {Array(5).fill(null).map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'fill-green-500 text-green-500' : 'fill-gray-500/30 text-gray-500/30'}`}
            />
          ))}
        </div>
        <p className="text-gray-300 mb-4 line-clamp-3">{content}</p>
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  );
}