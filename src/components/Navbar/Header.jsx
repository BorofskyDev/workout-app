import { GiWeightLiftingUp } from 'react-icons/gi';


function Header(props) {
    const { menu, setMenu } = props
  return (
    <header className="header">
      <div className="header__logo">
        <GiWeightLiftingUp className="header__icon" />
        <p className="header__logo--title">Father Figure - the workout app</p>
      </div>
      <div className="header__button">
        <button
          className={`menu__trigger ${menu ? 'menu__close' : ''}`}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
