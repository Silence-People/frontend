function Stats() {
  return (
    <>
      <div className="mt-5 container mb-5">
        <div className="row p-3 mb-5">
          <div className="offset-1 col-lg-5 p-5 col-sm-11 ">
            <h2 className="mb-5 fs-2">Trust with confidence</h2>
            <div className="mb-4 ">
              <h4>Customer-first always</h4>
              <p className="text-muted">
                That's why 14.3 million customers trust Zerodha with ₹4.5+ lakh
                crores worth of equity investments.
              </p>
            </div>
            <div className="mb-4 ">
              <h4>No spam or gimmicks</h4>
              <p className="text-muted">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </div>
            <div className="mb-4">
              <h4>The Zerodha universe</h4>
              <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div className="mb-4">
              <h4>Do better with money</h4>
              <p className="text-muted">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center col-sm-12">
            <img
              src="media/images/ecosystem.png"
              style={{ width: "90%" }}
              className="mx-5 pt-5"
            ></img>
            <a
              className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-5"
              href="#"
            >
              Explore our products&nbsp;&nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a
              className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="#"
            >
              Try Kite demo&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
