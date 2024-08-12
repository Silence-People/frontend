function Hero() {
  return (
    <div className="container mt-5">
      <div className="row p-5 mb-5 mt-5">
        <h1
          style={{ color: "#424242", fontSize: "32px" }}
          className="text-center"
        >
          We pioneered the discount broking model in Australia.<br></br> Now, we
          are breaking ground with our technology.
        </h1>
      </div>
      <div
        style={{
          paddingRight: "40px",
          paddingLeft: "40px",
          lineHeight: "1.8",
        }}
        className="row p-5 border-top"
      >
        <div className=" offset-1 col-lg-5 col-sm-12 p-5 about-hero-para">
          <p style={{ color: "#424242" }}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p style={{ color: "#424242" }}>
            {" "}
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p style={{ color: "#424242" }}>
            {" "}
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-lg-5 col-sm-12 p-5 about-hero-para">
          <p style={{ color: "#424242" }}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p style={{ color: "#424242" }}>
            <a
              style={{ textDecoration: "none", color: "#387ed1" }}
              href="https://rainmatter.com/"
              target="blank"
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p style={{ color: "#424242" }}>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is&nbsp;
            <a
              style={{ textDecoration: "none", color: "#387ed1" }}
              href="https://zerodha.com/media"
              target="blank"
            >
              saying about us.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
