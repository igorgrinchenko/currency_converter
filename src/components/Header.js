import { useEffect, useState } from "react";
import axios from "axios";
// Images
import logo from "../img/logo.png";
// Styles
import "../style/style.scss";

const Header = () => {
  const [rateUSD, setRateUSD] = useState();
  const [rateEUR, setRateEUR] = useState();

  useEffect(() => {
    getCurrencyRate("USD");
    getCurrencyRate("EUR");
  }, []);

  const getCurrencyRate = async (currency) => {
    const requestURL = `https://api.exchangerate.host/latest?base=${currency}`;
    try {
      const { data } = await axios.get(requestURL);
      if (data.base === "USD") setRateUSD(data);
      if (data.base === "EUR") setRateEUR(data);
    } catch (error) {
      console.log(error);
    }
  };

  const showContent = (rate) => (
    <span className={`rate_${rate?.base.toLowerCase()}`}>
      1{rate?.base} = {rate?.rates.UAH.toFixed(2)}UAH
    </span>
  );

  return (
    <div className="container">
      <header className="header">
        <a href="">
          <img className="logo" src={logo} alt="logo" />
        </a>

        <div className="exchange_rate">
          {showContent(rateUSD)}
          {showContent(rateEUR)}
        </div>
      </header>
    </div>
  );
};

export default Header;
