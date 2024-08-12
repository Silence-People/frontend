function Hero() {
  return (
    <div className="container text-center mt-5">
      <div className="row mt-5 mb-5 border-bottom pb-5">
        <h1
          className="mt-5 text-muted "
          style={{ fontSize: "44px", color: "#424242" }}
        >
          Technology
        </h1>
        <h3 className="mt-3" style={{ fontSize: "20px", color: "#424242" }}>
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p
          className="mt-3 pb-5 mb-5"
          style={{ fontSize: "16px", color: "#424242" }}
        >
          Check out our{" "}
          <a style={{ textDecoration: "none" }} href="#">
            investment offerings&nbsp;&nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
