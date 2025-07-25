import "../index.css";

export default function () {
  return (
    <fiv className="container">
      <form className="formCard">
        <div className="header">
          <h2 className="header-title">Mortage Calculator</h2>
          <button type="reset" className="header-btn">
            Clear ALL
          </button>
        </div>
        <div className="input-boxes">
          <div className="amount">
            <label>Mortage Amount</label>
            <input placeholder="Enter the Am" />
          </div>
          <div className="mortage-term-Rate">
            <div className="term">
              <label>Mortage Term</label>
              <input placeholder="Year" />
            </div>
            <div className="rate">
              <label>Interest Rate</label>
              <input placeholder="Percentage" />
            </div>
          </div>
          <div className="type">
            <label>Mortgage Type</label>
            <div className="repayment">
              <label>
                <input type="checkbox" />
              </label>
              <span>Repayment</span>
            </div>
            <div className="interest">
              <label>
                <input type="checkbox" />
              </label>
              <span>Interest</span>
            </div>
          </div>
        </div>

        <button type="submit" className="calculate-btn">
          Calculate Repayments
        </button>
      </form>
    </fiv>
  );
}
