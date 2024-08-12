import "../styles/css/Products.css";
let checkProp = (prop) => {
  if (prop && prop !== "") {
    return (
      <a href={prop}>
        {prop}&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i>
      </a>
    );
  } else {
    return null;
  }
};

function ImageLeft({
  imageSrc,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="offset-1 col-lg-6 col-sm-12 p-5">
          <img style={{ width: "90%" }} src={imageSrc} />
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-3 mt-5">
          <h1
            style={{
              fontSize: "35px",
              marginBottom: "20px",
            }}
            className="mt-3 px-5"
          >
            {productName}
          </h1>
          <p className="mt-4 px-5" style={{ lineHeight: "1.7" }}>
            {productDescription}
          </p>
          <div className="product-link px-5">
            {checkProp(tryDemo)}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {checkProp(learnMore)}
          </div>
          <div className="mt-3 product-link px-5">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLeft;
