export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Premium TV Entertainment
            <br />
            <span className="text-indigo-400">At Your Fingertips</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Access thousands of channels and VOD content worldwide. Start watching your favorite shows, movies, and sports events today.
          </p>
          <div className="mt-10">
            <a
              href="#plans"
              className="rounded-md bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow hover:bg-indigo-500"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}