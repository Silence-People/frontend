import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <>
      <div className="container text-center">
        <h2 className="mt-5">Open a Zerodha account</h2>
        <p className="lead fs-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to="/signup">
          <button type="button" className="btn btn-primary mb-5">
            Sign Up Now
          </button>
        </Link>
      </div>
    </>
  );
}

export default OpenAccount;
