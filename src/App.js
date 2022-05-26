// Components
import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";
import ConverterButton from "./components/ConverterButton";
import axios from "axios";
// Styles
import "./style/style.scss";

const App = () => {
  const convertCurrency = async (from, to, amount) => {
    const requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;
    try {
      const { data } = await axios.get(requestURL);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCurrencyInfo = (currencyInfo) => {
    console.log(currencyInfo);
  };

  const getCurrencyValueInfo = (currencyValueInfo) => {
    console.log(currencyValueInfo);
  };
  return (
    <div className="App">
      <div className="fade"></div>
      <Header />
      <div className="content">
        <div className="content_wrapper">
          <LeftContent
            getCurrencyInfo={getCurrencyInfo}
            getCurrencyValueInfo={getCurrencyValueInfo}
          />
          <RightContent
            getCurrencyInfo={getCurrencyInfo}
            getCurrencyValueInfo={getCurrencyValueInfo}
          />
        </div>
        <ConverterButton convertCurrency={convertCurrency} />
      </div>
    </div>
  );
};

export default App;
