function Hero() {
  return (
    <div className="container text-center pb-5">
      <div className="row mt-5 border-bottom pb-5">
        <h1 className="mt-5 mb-3">Pricing</h1>
        <p className="text-muted fs-5 mb-5 pb-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" />
          <h2
            className="fs-4"
            style={{ color: "#424242", marginBottom: "15px" }}
          >
            Free equity delivery
          </h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          {" "}
          <img src="media/images/intradayTrades.svg" />
          <h2
            className="fs-4"
            style={{ color: "#424242", marginBottom: "15px" }}
          >
            Intraday and F&O trades
          </h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          {" "}
          <img src="media/images/pricingEquity.svg" />
          <h2
            className="fs-4"
            style={{ color: "#424242", marginBottom: "15px" }}
          >
            Free direct MF
          </h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
