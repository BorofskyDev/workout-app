import { useState } from 'react';
import Header from './Header';
import Sidenav from './Sidenav';

function Navbar() {
  const [menu, setMenu] = useState(false);
  return <div>
    <Header menu={menu} setMenu={setMenu} />
    <Sidenav menu={menu} setMenu={setMenu} />
  </div>;
}

export default Navbar;
