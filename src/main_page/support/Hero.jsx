import "../styles/css/Support.css";

function Hero() {
  return (
    <div className="full-width">
      <div className="container">
        <div className="row px-5">
          <div className="col-6 px-5">
            <h1 className="fs-4 mb-5">Support Portal</h1>
          </div>
          <div className="col-6 px-5">
            <p className="text-end fs-6 text-decoration-underline">
              Track Tickets
            </p>
          </div>

          <div className="main-row-support row px-5">
            <div className="col-7">
              <h5 className=" mb-4 fs-4">
                Search for an answer or browse help topics to create a ticket
              </h5>

              <form className="input-group input-group-lg mb-3">
                <input
                  type="text"
                  className="form-control fs-6"
                  placeholder="Eg: how do i activate F&O, why is my order getting rejected... "
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-light list-inline-item
              "
                  type="button"
                  id="button-addon2"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
              <div className="d-flex flex-wrap">
                <p className="px-3 text-decoration-underline">
                  Track Account Opening{" "}
                </p>
                <p className="px-3 text-decoration-underline ">
                  {" "}
                  Track Segment Activation{" "}
                </p>{" "}
                <p className="px-3 text-decoration-underline">
                  Intraday Margins{" "}
                </p>
                <p className="px-3 text-decoration-underline mb-5">
                  {" "}
                  Kite User Manual{" "}
                </p>
              </div>
            </div>
            <div className="col-5 p-4">
              <h1 className="fs-4 mb-3">Featured</h1>
              <div>
                <ol>
                  <li className="fs-6 mb-3 text-decoration-underline">
                    {" "}
                    Surveillance measure on scrips - August 2024
                  </li>
                  <li className="fs-6 text-decoration-underline mb-5">
                    Latest Intraday leverages and Square-off timings
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
