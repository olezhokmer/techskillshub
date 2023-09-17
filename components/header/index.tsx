import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Logo from '../../assets/icons/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from 'store';
import { logOutUser } from 'store/reducers/user';

type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState)  => state.cart);
  const arrayPaths = ['/'];  

  const [onTop, setOnTop] = useState(( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const { user } = useSelector((state: RootState) => state.user);

  const headerClass = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if(!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function() {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }


  const logOut = () => {
    dispatch(logOutUser());
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return(
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container">
        <Link href="/">
          <a><h1 className="site-logo"><Logo />TechSkillsHub</h1></a>
        </Link>
        <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <Link href="/products">
            <a>Courses</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/guidelines">
            <a>Guidelines</a>
          </Link>     
        </nav>

        <div className="site-header__actions">
          <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
            <form className={`search-form`}>
              <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
              <input type="text" name="search" placeholder="Search" />
            </form>  
            <i onClick={() => setSearchOpen(!searchOpen)}  className="icon-search"></i>
          </button>
          <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart"></i>
              {cartItems.length > 0 && 
                <span className="btn-cart__count">{cartItems.length}</span>
              }
            </button>
          </Link>


          {
            !user
            ? <Link href="/login">
                <button className="site-header__btn-avatar"><i className="icon-avatar"></i></button>
              </Link>
            : 
            <div className="dropdown">
                <a className="dropbtn">{ user.firstName + ' ' + user.lastName}</a>
                <div className="dropdown-content">
                  <Link href="/404"><a>Profile</a></Link>
                  <Link href="/404"><a>Settings</a></Link>
                  <Link href="/404"><a>Purchases</a></Link>
                  <Link href='/products'><a onClick={logOut}>Log Out</a></Link>
                </div>
              </div>
          }
          <button 
            onClick={() => setMenuOpen(true)} 
            className="site-header__btn-menu">
            <i className="btn-hamburger"><span></span></i>
          </button>
        </div>
      </div>
    </header>
  )
};


export default Header;
