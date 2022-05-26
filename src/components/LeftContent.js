// Components
import SelectCurrency from "../components/SelectCurrency";
import CurrencyInput from "../components/CurrencyInput";

const LeftContent = ({
  currencyData,
  getCurrencyInfo,
  getCurrencyValueInfo,
}) => {
  const getCurrency = (event, currency) => {
    getCurrencyInfo(event, currency);
  };

  const getCurrencyValue = (event) => {
    getCurrencyValueInfo(event, event.target.value);
  };

  return (
    <div className="left_content_wrapper">
      <SelectCurrency getCurrency={getCurrency} currencyData={currencyData} />
      <CurrencyInput getCurrencyValue={getCurrencyValue} />
    </div>
  );
};

export default LeftContent;
