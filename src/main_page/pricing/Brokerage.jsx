function Brokerage() {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center">
        <div className="col-8">
          <a style={{ textDecoration: "none" }} href="#">
            <h4 className="fs-5">Brokerage Calculator</h4>
          </a>
        </div>
        <div className="col-4">
          <a style={{ textDecoration: "none" }} href="#">
            <h4 className="fs-5">List of Charges</h4>
          </a>
        </div>
      </div>
      <div
        style={{ fontSize: "12px", lineHeight: "2.0" }}
        className="p-5 mx-5 text-muted"
      >
        <ul>
          <li>
            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST
            per order.
          </li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li>
            Physical copies of contract notes, if required, shall be charged ₹20
            per contract note. Courier charges apply.
          </li>
          <li>
            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
            equity (whichever is lower).
          </li>
          <li>
            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Brokerage;
