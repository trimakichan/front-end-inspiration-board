import './Header.css';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='header-container'>
      <div className='header-content'>
        <h1 className='header-h1'><img src={Logo} className='logo' alt="Palette Logo" />Inspiration Board</h1>
      </div>
      </header>
  );
};

export default Header