import bannerImage from "../../assets/banner2.avif";

const Banner = () => {
  return (
    <div
      className="h-[450px] md:h-[650px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    >
      <div className="bg-black bg-opacity-60 flex flex-col items-center justify-center w-full h-full">
        <h1 className="h-16 border-r-2 mb-4"></h1>
        <h1 style={{fontFamily: "Dancing Script"}} className="italic text-primary text-3xl">Best Place For You</h1>
        <h1 className="text-6xl font-medium py-3 text-white">SPA AND BEAUTY SALON</h1>
        <p className="text-xl py-2 text-white">Give yourself a moment to relax, Find a minute to rejuvanate your body.</p>
        <button className="border border-primary py-2 px-6 mt-4 rounded-md text-primary hover:bg-primary hover:text-white font-medium">Get An Appointment</button>
        <h1 className="h-16 border-r-2 mt-8"></h1>
      </div>
    </div>
  );
};

export default Banner;
