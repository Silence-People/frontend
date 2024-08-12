function Hero() {
  return (
    <>
      <div className="container text-center mt-5 mb-5">
        <div className="row mt-5">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="mb-3 p-5 pt-0"
          ></img>
        </div>

        <h2 className="mt-5 mb-3">Invest in everything</h2>
        <p className="mb-4 lead fs-4">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button type="button" className="btn btn-primary mb-5">
          Sign Up Now
        </button>
      </div>
    </>
  );
}

export default Hero;
