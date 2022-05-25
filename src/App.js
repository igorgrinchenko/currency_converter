// Components
import Header from "./components/Header";
import SelectCurrency from "./components/SelectCurrency";
import CurrencyInput from "./components/CurrencyInput";
// Styles
import "./style/style.scss";

const App = () => {
  return (
    <div className="App">
      <div className="fade"></div>
      <Header />
      <SelectCurrency />
      <CurrencyInput />
    </div>
  );
};

export default App;
