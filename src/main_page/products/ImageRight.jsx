function ImageRight({ imageSrc, productName, productDescription, learnMore }) {
  return (
    <div className="container mb-5">
      <div className="row mt-5 mb-5">
        <div className="offset-1 col-4 p-5 mt-5">
          <h1
            style={{
              fontSize: "35px",
              marginBottom: "20px",
              marginTop: "10vh",
            }}
            className="pt-5"
          >
            {productName}
          </h1>
          <p className="mt-4" style={{ lineHeight: "1.7" }}>
            {productDescription}
          </p>
          <div className="mt-3 mb-5 product-link">
            <a href={learnMore}>
              {learnMore}&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-lg-6 col-sm-12 p-5">
          <img style={{ width: "95%" }} src={imageSrc} />
        </div>
      </div>
    </div>
  );
}

export default ImageRight;
