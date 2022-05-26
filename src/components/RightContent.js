// Components
import SelectCurrency from "../components/SelectCurrency";
import CurrencyInput from "../components/CurrencyInput";

const RightContent = ({
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
    <div className="right_content_wrapper">
      <SelectCurrency getCurrency={getCurrency} currencyData={currencyData} />
      <CurrencyInput getCurrencyValue={getCurrencyValue} />
    </div>
  );
};

export default RightContent;
