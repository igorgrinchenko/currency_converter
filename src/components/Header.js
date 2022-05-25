import logo from "../img/logo.png";
import "../style/style.scss";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={logo} />
        <span className="exchange_rate">1UAH = 20USD</span>
      </header>
    </div>
  );
};

export default Header;
