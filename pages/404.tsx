import Link from "next/link";

const FourOhFour = () => {
  return (
    <main className="bg-white dark:bg-neutral-900">
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1 className="text-4xl sm:text-5xl md:!text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                Oooops! <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9089FC] to-[#FF80B5]">
                  404
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="!text-xl text-gray-600 dark:text-gray-400 mb-8">
                  No encontramos la página que buscas.
                </p>
              </div>
              {/* CTA */}
              <div className="flex justify-center items-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#9089FC] to-[#FF80B5] hover:from-[#9089FC] hover:to-[#FF80B5]"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>

            {/* Hero image */}
          </div>
        </div>
        <div className="relative flex justify-center mb-8 group">
          <div className="flex flex-col justify-center relative">
            <div className="md:aspect-12-6 object-cover w-full h-full max-w-5xl h-96"></div>
            {/* <Image
            src={HeroImage}
            alt="Hero"
            className="md:aspect-12-6 object-cover w-full h-full max-w-5xl"
            loading="eager"
          /> */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 absolute right-14 sm:right-20 md:right-24 transform top-16 animate-float">
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <span className="absolute w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-[#FFF] via-[#EAEAEA] to-[#DFDFDF] animate-ping-slow rounded-full"></span>
                <svg viewBox="0 0 10 10" className="w-full h-full absolute">
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="illustration-01"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                  </defs>

                  <circle cx="5" cy="5" r="5" fill="url(#illustration-01)" />
                </svg>
              </div>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 absolute right-1/4 transform -translate-x-1/2 bottom-5 sm:bottom-12 md:bottom-16 animate-float-slow">
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* <span className="absolute w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-[#9089FC] to-[#FF80B5] animate-ping-slow rounded-full"></span> */}
                <svg viewBox="0 0 10 10" className="w-full h-full absolute">
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#FF80B5" />
                      <stop offset="100%" stopColor="#9089FC" />
                    </linearGradient>
                  </defs>

                  <circle cx="5" cy="5" r="5" fill="url(#gradient)" />
                </svg>
              </div>
            </div>
            <div className="w-14 h-14 md:w-20 md:h-20 absolute left-1/4 transform -translate-x-1/2 -top-5 animate-float">
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <span className="absolute w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#9089FC] to-[#FF80B5] animate-ping-slow rounded-full"></span>
                <svg viewBox="0 0 10 10" className="w-full h-full absolute">
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#FF80B5" />
                      <stop offset="100%" stopColor="#9089FC" />
                    </linearGradient>
                  </defs>

                  <circle cx="5" cy="5" r="5" fill="url(#gradient)" />
                </svg>
              </div>
            </div>
            <div className="absolute transform -translate-x-1/2 left-1/2 flex w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <span className="absolute w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-[#9089FC] to-[#FF80B5] animate-ping-slow rounded-full"></span>
                <svg viewBox="0 0 10 10" className="w-full h-full absolute">
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#FF80B5" />
                      <stop offset="100%" stopColor="#9089FC" />
                    </linearGradient>
                  </defs>

                  <circle cx="5" cy="5" r="5" fill="url(#gradient)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FourOhFour;
