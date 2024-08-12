import "../styles/css/About.css";

function Team() {
  return (
    <div className="container ">
      <div className="row mb-5 p-5 border-top">
        <h1
          style={{ color: "#424242", fontSize: "32px" }}
          className="text-center mb-5"
        >
          People
        </h1>
      </div>
      <div className="row mb-5 mt-5">
        <div className="col-lg-5 col-sm-12 mb-5 d-flex flex-column mb-3 align-items-end text-center">
          <img className="about-image " src="media/images/image0.jpeg"></img>
          <div className="mx-4">
            {" "}
            <h6 className="text-muted">Subash Lamichhane</h6>
            <h6 className="text-muted">Developer</h6>
          </div>
        </div>
        <div className="col-lg-7 div-para col-sm-12 mb-5">
          <p>
            I, Subash Lamichhane, developed <b>Safe Investing</b> in 2024 to
            test the capability to build a full stack web project.
          </p>
          <p>
            Today, Safe Investing can be used as a stock market simulator where
            users can invest without actual money so that users can be ready
            when starting to invest with real money.
          </p>
          <p>
            Playing soccer is my favourite past time and I also like to read
            books and play games{" "}
          </p>
          <p>
            {" "}
            Connect on{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/subashlamichhane26/"
            >
              LinkedIn
            </a>
            ,&nbsp;
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Silence-People"
            >
              Github
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
