import { Shield, Tv, Globe2, Clock } from 'lucide-react';

const features = [
  {
    name: 'High Quality Streams',
    description: 'Enjoy crystal clear HD and 4K quality streams on all your favorite channels.',
    icon: Tv,
  },
  {
    name: 'Global Coverage',
    description: 'Access channels from around the world with our extensive international coverage.',
    icon: Globe2,
  },
  {
    name: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to assist you.',
    icon: Clock,
  },
  {
    name: 'Secure Connection',
    description: 'Your streaming experience is protected with state-of-the-art encryption.',
    icon: Shield,
  },
];

export function Features() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for the ultimate TV experience
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}