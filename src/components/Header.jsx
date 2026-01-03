import './Header.css';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='site-header'>
      <div className='site-header__content'>
        <h1 className='site-header__title'><img src={Logo} className='logo' alt="Palette Logo" />Inspiration Board</h1>
      </div>
      </header>
  );
};

export default Header