function Universe() {
  return (
    <>
      <div className="container text-center mb-5">
        <div className="row mt-5">
          <h2 className="mt-5 mb-3 text-muted">The Zerodha Universe</h2>
          <p className="mb-4 fs-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="col-4 img-box">
            <img src="media/images/smallcaseLogo.png"></img>
            <p className="text-small text-muted">
              Thematic Investment Platform
            </p>
          </div>
          <div className="col-4 img-box">
            <img src="media/images/streakLogo.png"></img>
            <p className="text-small text-muted">Algo and Strategy Platform</p>
          </div>
          <div className="col-4  img-box">
            <img src="media/images/sensibullLogo.svg"></img>
            <p className="text-small text-muted">Options Trading Platform</p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-4  img-box">
            <img src="media/images/zerodhaFundhouse.png"></img>
            <p className="text-small text-muted">Asset Management</p>
          </div>
          <div className="col-4  img-box">
            <img src="media/images/goldenpiLogo.png"></img>
            <p className="text-small text-muted">
              Fundamental Research Platform
            </p>
          </div>
          <div className="col-4 img-box mb-5">
            <img src="media/images/dittoLogo.png"></img>
            <p className="text-small text-muted">Insurance</p>
          </div>
        </div>
        <button type="button" className="btn btn-primary mb-5 px-5">
          Sign Up Now
        </button>
      </div>
    </>
  );
}

export default Universe;
