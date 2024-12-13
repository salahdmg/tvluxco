import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '9.99',
    features: [
      'HD Quality Streams',
      '5000+ Channels',
      '1 Device Connection',
      '24/7 Support',
    ],
  },
  {
    name: 'Premium',
    price: '14.99',
    features: [
      '4K Quality Streams',
      '8000+ Channels',
      '1 Device Connection',
      'VOD Library Access',
      '24/7 Priority Support',
    ],
    popular: true,
  },
  {
    name: 'Premium (2 screens)',
    price: '19.99',
    features: [
      '4K Quality Streams',
      '8000+ Channels',
      '2 Device Connections',
      'VOD Library Access',
      '24/7 Priority Support',
    ],
  },
];

export function Plans() {
  return (
    <div id="plans" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your entertainment needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                plan.popular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <div>
                {plan.popular && (
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-x-2">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${plan.price}</span>
                  <span className="text-base text-gray-500">/month</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                <ul role="list" className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" />
                      <span className="text-sm leading-6 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}