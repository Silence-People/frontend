function Education() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className=" col-lg-6 col-sm-12 mt-5 mb-5">
          <img style={{ width: "80%" }} src="media/images/education.svg"></img>
        </div>
        <div className="col-lg-6 col-sm-12 p-5 mt-5 mb-5">
          <h5 className="mb-4 fs-4 text-muted">
            Free and Open Market Education
          </h5>
          <p style={{ fontSize: "18px" }} className=" text-muted mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.<br></br>
            <br></br>
            <a
              className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover "
              href="#"
            >
              Varsity&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>

          <p style={{ fontSize: "18px" }} className="mb-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.<br></br>
            <br></br>
            <a
              className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="#"
            >
              Trading Q&A&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
