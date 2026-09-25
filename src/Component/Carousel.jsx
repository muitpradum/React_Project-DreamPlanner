import { useState } from "react";

const slides = [
  {
    image:
      "https://images.openai.com/static-rsc-4/-C4xxyfLnvWSb5R7w23clBcDZyZv5-XoJR-LEGmVNa2Q6Antrispv2bhH6J1FGI7CwbFRRxMWxD0R0RMLQmJvcr4bt437VTRZ_xQtrK6aOYtFL79jF5i7Oddw9Glim8h4YcWlfBure6RuvysL8yXTrXX34fef-HCFMSwOxPsDZtfOeND-59ZoWFDN4-rF316?purpose=fullsize",
    title: "Wedding Events",
    description: "Create beautiful memories on your special day.",
  },
  {
    image:
      "https://images.openai.com/static-rsc-4/xhfzxY4NFQOFqZEP7PlSZkf7rsGPugrI5ITVYreVU41E-puDwjnfwUqVNYA8yl4GAszcbOz6yQuNR72P0tkopabMK86OtV0G3r1EyMXB9hjT3M4HugQgSXmQBTL2W05KcIi5gBCmCX2Q--nOTFLtVNi_oNskcEvXiwTnf70WWGYGXZhIMj7CzkKzvPzlIaJE?purpose=fullsize",
    title: "Birthday Celebrations",
    description: "Celebrate your special moments with loved ones.",
  },
  {
    image:
      "https://images.openai.com/static-rsc-4/J2kzf-QzaQFIzKX6m-bwmZesyPrR-CRbGD0JYB6QzfNMmFSxj_Euzu-XbMhE00keNzbPUuL9pEJwdjO1vd8pLLHjFwLM60E4y8a-QcsLI3ZrbJuBaTs4CjO_03Aw5QxYYtbPNoQGutdLdxY1EQRShST6Th2R69NG5i9aEDr-v8QsHndVGNXgc9-ixAhBFGdG?purpose=fullsize",
    title: "Anniversary",
    description: "Celebrate love, happiness, and togetherness.",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">

      {/* Image */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white m-5 px-5">
        <h1 className="text-3xl md:text-6xl  !text-purple-800 font-bold mb-4">
          {slides[current].title}
        </h1>

        <p className="text-lg md:text-xl mx-10">
          {slides[current].description}
        </p>

        {/* <button className="bg-linear-65 from-purple-400 to-sky-300 hover:bg-purple-700 m-5 px-6 py-3 rounded-lg font-semibold">
          Plan Your Event
        </button>*/}
      </div> 

      {/* Previous Button */}
      <button
        onClick={previousSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2
        bg-white/30 hover:bg-white/50 text-white
        w-10 h-10 rounded-full text-2xl"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2
        bg-white/30 hover:bg-white/50 text-white
        w-10 h-10 rounded-full text-2xl"
      >
        ❯
      </button>

      {/* Dots */}
      {/* <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div> */}

    </div>
  );
}

export default Carousel;