import Slider from "react-slick";
import image1 from "../../assets/04_2.png";
import image2 from "../../assets/06_2.png";
import image3 from "../../assets/07_2.png";
import image4 from "../../assets/09_2.png";

const images = [
  {
    url: image2,
    alt: "CEB Transmission Lines",
    title: "Reliable Power Distribution",
  },
  {
    url: image3,
    alt: "CEB Customer Service",
    title: "Customer-Centric Service",
  },
  {
    url: image4,
    alt: "CEB Customer ",
    title: "Customer-Centric Service",
  },
  {
    url: image1,
    alt: "CEB Power Plant",
    title: "Sustainable Energy Generation",
  },
];

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[400px] w-full">
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </Slider>

      {/* Centered overlay content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-black/60 rounded-lg px-8 py-6 md:px-14 md:py-7 flex flex-col items-center max-w-xl w-full mx-4 shadow-xl border border-white/10">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2 text-center tracking-tight">
            Welcome to <span className="text-blue-200 font-bold">CEB INFO</span>
          </h1>
          <div className="w-12 h-1 bg-blue-400 rounded-full mb-3" />
          <p className="md:text-normal text-white/80 font-normal text-center">
            Empowering communities with reliable, sustainable, and innovative
            energy solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
