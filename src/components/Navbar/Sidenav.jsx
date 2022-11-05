import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Sidenav(props) {
  const { menu, setMenu } = props;
  let sidenavMenu = useRef(null);
  let sidenavMenuOverlay = useRef(null);
  let menuLayer = useRef(null);
  let menuTimeline = useRef(null);

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidenavMenuOverlay, menuLayer, sidenavMenu],
      { duration: 0, x: '100%' },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    menu ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [menu]);

  return (
    <div className="menu" ref={(el) => (sidenavMenuOverlay = el)}>
      <div className="menu__wrapper">
        <div className="menu__layer" ref={(el) => (menuLayer = el)}></div>
        <nav className="menu__nav" ref={(el) => (sidenavMenu = el)}>
          <div className="menu__top">
            <ul className="menu__links">
              <li className="menu__link">
                <a href="#" className="menu__link--section">
                  FAQ
                </a>
              </li>
              <li className="menu__link">
                <a href="#" className="menu__link--section">
                  About
                </a>
              </li>
              <li className="menu__link">
                <a href="#" className="menu__link--section">
                  Healthy Living
                </a>
              </li>
            </ul>
          </div>
          <div className="menu__bottom">
            <h3 className="menu__bottom--title">Connect with us</h3>
            <div className="menu__auth">
              <a href="#" className="menu__login">
                Login
              </a>
              <a href="#" className="menu__register">
                Register
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidenav;
