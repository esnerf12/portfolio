import { Carousel, Typography } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative h-[550px] w-full">        
        <img
          src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full pt-20 bg-black/75">
          <div className="flex w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="inline-block py-6 mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Sobre mí
            </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-end">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
            </svg>
          </div>
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-xl md:text-xl"
            >
              En realidad soy un Astronauta 🧑‍🚀
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-[550px] w-full">        
        <img
          src="../../front.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full pt-20 bg-black/75">
          <div className="flex w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="inline-block py-6 mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              En realidad no... 😂😂
            </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-end">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
            </svg>
          </div>
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-xl md:text-xl"
            >
              Además de programar me gusta mucho hacer ejercicio, soy aficionado a la calistenia y entreno a diario. 💪💪
            </Typography>
          </div>
        </div>
      </div>
      
      <div className="relative h-[550px] w-full">        
        <img
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full pt-20 bg-black/75">
          <div className="flex w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="inline-block py-6 mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Me gusta la AI 🤖
            </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-end">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
            </svg>
          </div>
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-xl md:text-xl"
            >
              Me interesa bastante el tema de la inteligencia artificial, proximamente tendré muchos proyectos sobre AI en este portafolio. 🚀
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
