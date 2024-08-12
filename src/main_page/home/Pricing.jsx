function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5 mb-5">
        <div className="offset-1 col-4 mb-5 mt-5">
          <h3 className="mb-3">Unbeatable pricing</h3>

          <p>
            We pioneered the concept of discount broking and price transparency
            in Australia. Flat fees and no hidden charges.
          </p>
          <a
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="#"
          >
            See Pricing&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2 mt-5 mb-5"></div>
        <div className="col-5 mt-5 mb-5">
          <div className="row">
            <div className="border p-3 col-6 text-center">
              <h1 className="mb-3">A$0</h1>
              <p className="fs-5 text-muted">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="border p-3 col-6 text-center">
              <h1 className="mb-3">A$20</h1>
              <p className="fs-5 text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
