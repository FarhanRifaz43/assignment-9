const Banner = () => {
    return (
        <div className="hero min-h-screen mb-20" style={{backgroundImage: 'url(https://i.ibb.co/sWW02wG/pexels-sora-shimazaki-5673488.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">Elevate Your Events with <span className="text-cyan-500">Class</span></h1>
      <p className="mb-5 text-gray-300"><i>We specialize in crafting unforgettable corporate events that leave <br /> a lasting impression. Discover the art of flawless event management with us.</i></p>
    </div>
  </div>
</div>
    );
};

export default Banner;