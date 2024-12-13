import { ShoppingCart, Mail, Play } from 'lucide-react';

const steps = [
  {
    name: 'Place an order',
    description: 'Choose your preferred plan and complete the purchase process.',
    icon: ShoppingCart,
  },
  {
    name: 'Receive information',
    description: 'Get your login credentials and setup instructions via email.',
    icon: Mail,
  },
  {
    name: 'Enjoy',
    description: 'Start streaming your favorite content on your preferred device.',
    icon: Play,
  },
];

export function HowItWorks() {
  return (
    <div className="py-24 bg-gray-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How the Subscription Works
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            {steps.map((step, index) => (
              <div key={step.name} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mt-6">
                  <div className="mb-2 inline-flex items-center justify-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}