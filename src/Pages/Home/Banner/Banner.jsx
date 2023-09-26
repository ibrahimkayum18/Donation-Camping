const Banner = () => {
  return (
    <div className="py-5 lg:h-[600px] ">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/hHxfGNS/donation.png)"
        }}
      >
        <div className="hero-overlay bg-base-200 bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>
            <input className="py-1 md:py-3 px-5 rounded-l-lg  md:w-[300px]" type="text" placeholder="Search here..." />
            <button className="py-1 md:py-3 px-2 lg:px-5 bg-[#FF444A] rounded-r-lg text-white font-semibold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
