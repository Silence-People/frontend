function CreateTicket() {
  <style></style>;
  return (
    <div className="container p-5">
      <h1 className="px-5 fs-4 text-muted">
        To create a ticket, see relevant topic
      </h1>
      <div className="row px-5">
        <div className="col-4 p-5">
          <h4 className="fs-5 mb-4">
            <i className="fa-solid fa-circle-plus"></i>&nbsp; Account Opening
          </h4>
          <a style={{ textDecoration: "none" }} href="#">
            <p>Getting started</p>
            <p>Online</p>
            <p>Offline</p>
            <p>Charges</p>
            <p>Company, Partnership and HUF</p>
            <p>Non Resident Indian (NRI)</p>
          </a>
        </div>
        <div className="col-4 p-5">
          <h4 className="fs-5 mb-4">
            <i className="fa-regular fa-user"></i>&nbsp;Your Zerodha Account
          </h4>
          <a style={{ textDecoration: "none" }} href="#">
            <p>Login credentials</p>
            <p>Your Profile</p>
            <p>Account modification and segment addition</p>
            <p>CMR & DP ID</p>
            <p>Nomination</p>
            <p>Transfer and conversion of shares</p>
          </a>
        </div>
        <div className="col-4 p-5">
          <h2 className="fs-5 mb-4">
            <i className="fa-solid fa-chart-simple"></i>&nbsp;Trading and
            Markets
          </h2>
          <a style={{ textDecoration: "none" }} href="#">
            <p>Trading FAQs</p>
            <p>Kite</p>
            <p>Margins</p>
            <p>Product and order types</p>
            <p>Corporate actions</p>
            <p>Kite features</p>
          </a>
        </div>
      </div>

      <div className="row p-5">
        <div className="col-4 px-5">
          <h4 className="fs-5 mb-4">
            <i className="fa-solid fa-wallet"></i>&nbsp; Funds
          </h4>
          <a style={{ textDecoration: "none" }} href="#">
            <p>Fund withdrawal</p>
            <p>Adding funds</p>
            <p>Adding bank accounts</p>
            <p>eMandates</p>
          </a>
        </div>
        <div className="col-4 px-5">
          <h4 className="fs-5 mb-4">
            <i className="fa-brands fa-steam"></i>&nbsp;Console
          </h4>
          <a style={{ textDecoration: "none" }} href="#">
            <p>IPO</p>
            <p>Portfolio</p>
            <p>Funds statement</p>
            <p>Profile</p>
            <p>Reports</p>
            <p>Referral program</p>
          </a>
        </div>
        <div className="col-4 px-5">
          <h2 className="fs-4 mb-4">
            <i className="fa-solid fa-coins"></i>&nbsp;Coin
          </h2>
          <a style={{ textDecoration: "none" }} href="#">
            <p>Understanding mutual funds and Coin</p>
            <p>Coin app</p>
            <p>Coin web</p>
            <p>Transactions and reports</p>
            <p>National Pension Scheme (NPS)</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
