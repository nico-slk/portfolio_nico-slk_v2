import i18n from "../../i18n/i18n";

const Header = () => {
  return (
    <div>

      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
    </div>
  );
};

export default Header;
